import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Animated,
  Keyboard,
  UIManager,
  View,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const KeyboardShift = props => {
  const [shift, setShift] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      handleKBdidShow
    );
    const keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      handleKBdidhide
    );

    return () => {
      keyboardDidShowSub.remove();
      keyboardDidHideSub.remove();
    };
  }, []);

  const handleKBdidShow = event => {
    const keyboardHeight = event.endCoordinates.height;
    const { height: windowHeight } = Dimensions.get("window");

    const currentlyFocusedField = TextInput.State.currentlyFocusedField();

    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap =
          windowHeight - keyboardHeight - (fieldTop + fieldHeight) - 25;
        if (gap >= 0) {
          return;
        }
        Animated.timing(shift, {
          toValue: gap,
          duration: 0,
          useNativeDriver: true
        }).start();
      }
    );
  };
  const handleKBdidhide = () => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  return (
    <AnimatedCardContainer style={{ transform: [{ translateY: shift }] }}>
      {props.children()}
    </AnimatedCardContainer>
  );
};

export default KeyboardShift;

const AnimatedCardContainer = new Animated.createAnimatedComponent(View);
