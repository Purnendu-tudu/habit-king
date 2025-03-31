import { create } from "zustand";
import { supabase } from "./supabase";

interface Habits {
    habitId: string;
    habitTitle: string;
    habitDescription: string;
    userCount: string;
    userId: string;
}

interface UserHabit extends Habits {

}

type UserHabitTypes = {
    userHabits: UserHabit[];
    publicHabits: Habits[];
    loading: boolean;

    userCreateHabit: (title: string, description: string, userId: string) => void;
    userSaveHabitToDb: (tempId: string, title: string, description: string, userId: string) => Promise<void>;
    userMakeHabit: (habitId: string, userId: string, currentHabit: UserHabit) => Promise<void>;
    userGetPublicHabits: (sessionToken: string) => Promise<void>;
    userCurrentHabits: () => Promise<void>;


}

export const useUserHabits = create<UserHabitTypes>((set, get) => ({
    userHabits: [],
    publicHabits: [],
    loading: false,
    userCreateHabit: (title, description, userId) => {
        const tempId = Math.random().toString(36).substring(7);
        const newHabit: Habits = { habitId: tempId, habitTitle: title, habitDescription: description, userId: userId, userCount: "0" };
        set((state) => ({ publicHabits: [newHabit, ...state.publicHabits] }));
        get().userSaveHabitToDb(tempId, title, description, userId);
    },
    userSaveHabitToDb: async (tempId, title, description, userId) => {

        const { data, error } = await supabase.from('habit_list').insert([
            {
                'habit_title': title,
                'habit_description': description,
                'user_id': userId
            }
        ]).select().single();

        if (error) {
            alert(error.message);
            return;
        }

        set((state) => ({
            publicHabits: state.publicHabits.map((habit) => habit.habitId === tempId ? { ...habit, habitId: data.id } : habit)
        }))
    },


    userMakeHabit: async (habitId, userId, currentHabit) => {

        const { data: existingHabit, error: checkError } = await supabase
            .from('user_data')
            .select('*')
            .eq('user_id', userId)
            .eq('habit_id', habitId)
            .single();

        if (checkError && checkError.code !== 'PGRST116') { // Ignore "No rows found" error
            alert(checkError.message);
            return;
        }

        if (existingHabit) {
            alert('You already have this habit.');
            return;
        }


        const { data, error } = await supabase.from('user_data').insert([
            {
                'user_id': userId,
                'habit_id': habitId
            }
        ]).select().single();

        if (error) {
            alert(error.message);
            return;
        }

        if(data){
            alert("You Made this Habit");
        }

        set((state) => ({
            userHabits: [currentHabit, ...state.userHabits.filter((habit) => habit.habitId !== habitId)]
        }));

    },
    userGetPublicHabits: async (sessionToken) => {
        // const token = (await supabase.auth.getSession()).data.session.access_token;
        // if(token !== sessionToken){
        //     return;
        // }
        const { data } = await supabase.from('habit_list').select("*");
        set((state) => ({
            publicHabits: [
                ...state.publicHabits, // Keep existing habits
                ...data.map((habit) => ({
                    habitId: habit.id.toString(),
                    habitTitle: habit.habit_title,
                    habitDescription: habit.habit_description,
                    userCount: habit.user_count.toString(),
                    userId: habit.user_id,
                })),
            ],
        }));
    },
    userCurrentHabits: async () => {
        
    }
}));