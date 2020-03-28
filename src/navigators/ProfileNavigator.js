import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native";
import ProfileScreen from "./../screens/ProfileScreen";
import ConfirmationScreen from "./../screens/AuthScreens/ConfirmationScreen";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            width: "100%"
          }
        }}
      />
      <Stack.Screen
        name="email-confirmation"
        component={ConfirmationScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
