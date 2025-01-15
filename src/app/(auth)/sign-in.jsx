import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [isSubmiting, setisSubmiting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Controle de visibilidade da senha

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          
          {/* Campo de email */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry={!showPassword}  
            renderRight={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text>{showPassword ? 'Hide' : 'Show'}</Text> 
              </TouchableOpacity>
            }
          />

          <CustomButton
            title="Sign-in"
            hadlePress={submit}
            isLoading={isSubmiting}
            containerStyles="mt-7"
          />
        </View>

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100">
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="text-lg text-secondary font-psemibold">Sign-up</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
