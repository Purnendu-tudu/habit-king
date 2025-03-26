import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'expo-router';

import { useUserState } from '@/utils/authStore';

const signup = () => {

    const router = useRouter();
    

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const handelSignup = async () => {
        console.log(userEmail, userPassword);
        const { data, error } = await supabase.auth.signUp({email:userEmail, password:userPassword})
        if(error){
            console.log(error);
        }else{
            router.replace('/login');   
        }
             

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
                    <Text>User Phone</Text>
                    <TextInput placeholder='Enter Phone number' onChangeText={setUserPhone} value={userPhone} ></TextInput>
                </View>
                <View>
                    <Text>User Password</Text>
                    <TextInput placeholder='Enter user password' onChangeText={setUserPassword} value={userPassword}></TextInput>
                </View>
                <View>
                    <TouchableOpacity onPress={handelSignup}>
                        <Text>Sign in</Text>
                    </TouchableOpacity>
                </View>
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

export default signup