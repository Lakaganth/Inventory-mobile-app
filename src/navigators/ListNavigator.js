import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native";
import ListScreen from "./../screens/ListScreen";
import ListDetailScreen from "../screens/ListDetailScreen";

const Stack = createStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Today's List"
        component={ListScreen}
        options={{
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
        name="List"
        component={ListDetailScreen}
        options={{
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
    </Stack.Navigator>
  );
};

export default ListNavigator;
