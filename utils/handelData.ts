
import { supabase } from "./supabase"


const calculateDays = ({ start_date, end_date }) => {
    const start = new Date(start_date);
    const end = new Date(end_date);

    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
}

export const insertUserHabit = async ({ habit_title, habit_description, start_date, end_date, visibility, user_id }) => {
    console.log("called main");
    const duration = calculateDays({ start_date, end_date }).toString();
    const { data, error } = await supabase.from('user_data').insert([
        {
            'habit_title': habit_title,
            'habit_description': habit_description,
            'start_date': start_date,
            'end_date': end_date,
            'duration': duration,
            'visibility': visibility,
            'user_id': user_id
        }
    ]).select();

    return { data, error };

}

export const insertPublicHabitList = async ({ habit_title, habit_description, user_id }) => {
    const { data, error } = await supabase.from('habit_list').insert([
        {
            'habit_title': habit_title,
            'habit_description': habit_description,
            'user_id': user_id
        }
    ]).select();

    return { data, error }
}

export const getAllDataFromTable = async ({ table_name }) => {

    const { data, error } = await supabase.from(table_name).select('*');

    return {data, error};

}

export const getUserAllHabitData = async ({table_name, user_id}) => {
    const {data, error} = await supabase.from(table_name).select('*').eq('user_id', user_id);
    return {data, error};
}