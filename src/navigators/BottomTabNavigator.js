import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { Ionicons, Entypo } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import ListNavigator from "./ListNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#ff7977",
        inactiveTintColor: "grey",
        showLabel: false,
        showIcon: true,
        keyboardHidesTabBar: true,
        activeBackgroundColor: "#161616",
        style: {
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
          backgroundColor: "#161616",
          // borderColor: "transparent",
          overflow: "hidden"
          // borderWidth: 0.5
          // position: "absolute",
          // bottom: -10,
          // left: 0,
          // right: -1
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="List"
        component={ListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={32} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Profie"
        component={ProfileNavigator}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={32} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
