import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native";
import ProfileScreen from "./../screens/ProfileScreen";

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
            fontWeight: "bold"
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
