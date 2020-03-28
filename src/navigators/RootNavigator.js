import React, { useEffect, useCallback } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector, useDispatch } from "react-redux";
import WelcomeNavigator from "./WelcomeNavigator";
import * as AuthActions from "../../store/actions/authActions";

const RootNavigator = () => {
  const user = useSelector(state => state.auth.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getUser();
  // }, [dispatch]);

  // const getUser = useCallback(async () => {
  //   await dispatch(AuthActions.getCurrentAuthenticatedUser());
  // }, [dispatch]);

  return (
    <NavigationContainer>
      {!user ? <WelcomeNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
