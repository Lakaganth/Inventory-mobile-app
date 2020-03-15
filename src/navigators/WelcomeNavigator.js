import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./../screens/WelcomeScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import ConfirmationScreen from "./../screens/AuthScreens/ConfirmationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const WelcomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="confirm"
        component={ConfirmationScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;
