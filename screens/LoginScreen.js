import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'


export default function LoginScreen() {
    const navigation = useNavigation();
    const onSignIn = async () => {
      // console.warn('Sign in');
        navigation.push('SignUp')
      //   try {
      //     await login({ email });
      //     router.push({ pathname: '/authenticate', params: { email } });
      //   } catch (e) {
      //     Alert.alert('Error', e.message);
      //   }
      };
  return (
    <KeyboardAvoidingView behavior='height'>
    <View className="bg-white h-full w-full">
        <StatusBar style='light' backgroundColor='#000'/>
        <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

        {/* lights */}
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require('../assets/images/light.png')} />
            <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require('../assets/images/light.png')} />
        </View>

        {/* title and form */}
        <View className="h-full w-full flex justify-evenly ">
            {/* Title */}
            <View className="flex items-center pt-[100px]">
                <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
                    Sign In
                </Animated.Text>
            </View>

            {/* form */}
            <View className="flex items-center mx-4 space-y-4 pt-10 pb-10">
                <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                </Animated.View>
                {/* <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry/>
                </Animated.View> */}
                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="w-full">
                    <TouchableOpacity 
                        className="w-full bg-sky-400 p-3 rounded-xl mb-3" onPress={onSignIn}>
                            <Text className="text-xl font-bold text-white text-center">Sign In</Text>
                    </TouchableOpacity>
                </Animated.View>
                {/* <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('SignUp')}> 
                        <Text className="text-sky-600">Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View> */}
            </View>
        </View>
    </View>
    </KeyboardAvoidingView>
  )
}