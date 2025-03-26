import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUserState } from '@/utils/authStore';

const login = () => {

    const router = useRouter();
    const {user, loading, userLogin } = useUserState();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handelLogin = async () => {

        const loggedin = await userLogin(userEmail, userPassword);
        if(loggedin){
            router.replace('/(tabs)');
        }
        // console.log(userEmail, userPassword);
        // const { data , error } = await supabase.auth.signInWithPassword({email:userEmail, password:userPassword});
        // if(error){
        //     console.log(error);
        // }else{
        //     if(data.session){
        //         await AsyncStorage.setItem('userSession', JSON.stringify(data.session));
        //     }
        //     router.replace('/(tabs)');   
        // }
             

    }

    const handelSignIn = ()=>{
        router.push('/signup');
    }

    return (
        <View style={style.container}>
            <Text>Habit King</Text>
            <View style={style.loginform}>
                <View>
                    <Text>User Email</Text>
                    <TextInput placeholder='Enter User email' onChangeText={setUserEmail} value={userEmail} ></TextInput>
                </View>
                <View>
                    <Text>User Password</Text>
                    <TextInput placeholder='Enter user password' onChangeText={setUserPassword} value={userPassword}></TextInput>
                </View>
                <View>
                    {loading ? <ActivityIndicator/>:
                    <TouchableOpacity onPress={handelLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>}
                </View>
            </View>
            <View>
                <Text>Dont Have an account ? </Text>
                <TouchableOpacity onPress={handelSignIn}><Text>Sign In</Text></TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginform:{
        display:'flex',
        justifyContent:'flex-start',
        borderWidth:1,
        width:'75%',
        padding:10,
    }
});

export default login