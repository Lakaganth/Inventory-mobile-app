import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector } from "react-redux";
import WelcomeNavigator from "./WelcomeNavigator";

const RootNavigator = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <NavigationContainer>
      {!user ? <WelcomeNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
