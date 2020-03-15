import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { BlurView } from "expo-blur";
import {
  Alert,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as AuthActions from "../../../store/actions/authActions";

const screenHeight = Dimensions.get("window").height;

const ErrorModal = () => {
  const dispatch = useDispatch();
  const errorState = useSelector(state => state.auth.error);
  const [top, setTop] = useState(new Animated.Value(screenHeight));
  const [scale, setScale] = useState(new Animated.Value(1.3));
  const [translateY, setTranslateY] = useState(new Animated.Value(0));

  useEffect(() => {
    modalAnimation();
  }, [errorState]);

  const modalAnimation = () => {
    if (errorState) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0
      }).start();
      Animated.spring(scale, { toValue: 1 }).start();
      Animated.timing(translateY, {
        toValue: 0,
        duration: 0
      }).start();
    }
    if (!errorState) {
      setTimeout(() => {
        Animated.timing(top, {
          toValue: screenHeight,
          duration: 0
        }).start();
        Animated.spring(scale, { toValue: 1.3 }).start();
      }, 500);

      Animated.timing(translateY, {
        toValue: 1000,
        duration: 500
      }).start();
    }
  };

  const handleError = async () => {
    await dispatch(AuthActions.resetErrorState());
  };

  return (
    <AnimatedContainer>
      <BlurView
        tint="default"
        intensity={100}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
      />
      <AnimatedModal
        style={{
          transform: [{ scale: scale }, { translateY: translateY }]
        }}
      >
        {/* <Logo source={require("../assets/logo-dc.png")} /> */}
        <Text>ERROR!</Text>
        <Text>{errorState}</Text>

        <TouchableOpacity onPress={handleError}>
          <Button>
            <ButtonText>OK</ButtonText>
          </Button>
        </TouchableOpacity>
      </AnimatedModal>
    </AnimatedContainer>
  );
};

export default ErrorModal;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${screenHeight + 50}px;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Modal = styled.View`
  width: 335px;
  height: 250px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const AnimatedModal = Animated.createAnimatedComponent(Modal);

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;

const Button = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
  margin-top: 20px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;
