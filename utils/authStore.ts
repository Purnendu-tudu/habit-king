import {create } from "zustand";
import { supabase } from "./supabase";
import { router } from "expo-router";

type User = {
    id: string;
    email : string;
    username: string;
    token : string;
}

type UserState = {
    user: User;
    loading: boolean;
    userLogin : (userEmail : string, userPassword: string) => Promise<boolean>;
    userLogout : () => Promise<boolean>;
    chekAuthStatus : () => Promise<boolean>;
}

export const useUserState = create<UserState>((set) => ({
    user: null,
    loading: false,
    userLogin : async(email, password) => {
        set({loading: true});

        const { data, error} = await supabase.auth.signInWithPassword({email, password});

        if(error){
            alert(error.message);
            set({loading: false});
            return;
        }

        if(data.user){
            set({user:{id: data.session.user.id , email: data.session.user.email, username: data.session.user.user_metadata?.display_name || '', token:data.session.access_token}})
        }

        set({loading: false});
        return true;

    },
    userLogout : async () => {
        await supabase.auth.signOut();
        set({user: null});
        return true;
    },
    chekAuthStatus : async () => {
        const {data} = await supabase.auth.getSession();
        console.log(data);
        if(data.session?.user){
            set({user:{id: data.session.user.id , email: data.session.user.email, username: data.session.user.user_metadata?.display_name || '', token:data.session.access_token}})
            return true;
        }
        return false;
    },
}));

