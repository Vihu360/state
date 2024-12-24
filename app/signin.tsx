import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import { login, logout } from '@/lib/appWrite'
import { useGlobalContext } from '@/lib/globalProvider'
import { Redirect } from 'expo-router'

const handleLogin = async () => {
    try {
        const result = await login();
        if (result) {
            // Handle successful login
            console.log(result);
            console.log("Login successful");
            <Redirect href="/" />
        } else {
            Alert.alert("Login Failed", "Unable to login with Google");
        }
    } catch (error) {
        console.error("Login error:", error);
        Alert.alert("Error", "An error occurred during login");
    }
}

export default function signin() {

    const { loading, isLoggedIn } = useGlobalContext();

    if (!loading && isLoggedIn) {
        return (
            <Redirect href="/" />
        )
    }

    console.log(loading, isLoggedIn)
    
    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />

                <View className='px-14 gap-3'>

                    <Text className='text-2xl text-center font-rubikMedium text-gray-600'>Welcome to State</Text>

                    <Text className='text-2xl text-center font-rubik text-gray-600'>Let's get started to build
                        <Text className='text-2xl text-center font-rubikMedium text-blue-600'>
                            {"    "}YOUR DREAM HOME
                        </Text></Text>

                    <Text className='text-center text-lg '>Please Login to continue</Text>

                    <TouchableOpacity className=' bg-white shadow-md shadow-zinc-500 rounded-full
             w-full py-4 mt-4' onPress={handleLogin} >
                        <View className='flex flex-row items-center justify-center gap-5'>
                            <Image source={require('../assets/icons/google.png')} className='w-6 h-6' resizeMode='contain' />
                            <Text className='text-center text-black-300 text-lg font-rubikMedium'>Continue with google</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}