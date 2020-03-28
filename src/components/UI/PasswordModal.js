import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dimensions, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useDispatch } from "react-redux";
import { Ionicons, Entypo } from "@expo/vector-icons";
import KeyboardShift from "./KeyboardShift";
import * as AuthActions from "../../../store/actions/authActions";

const { width, height } = Dimensions.get("window");
const screenHeight = Dimensions.get("window").height;

const PasswordModal = ({ showModal, change }) => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [top, setTop] = useState(new Animated.Value(screenHeight));
  const [scale, setScale] = useState(new Animated.Value(1.3));
  const [translateY, setTranslateY] = useState(new Animated.Value(0));

  useEffect(() => {
    modalAnimation();
  }, [showModal]);

  const modalAnimation = () => {
    if (showModal) {
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
    if (!showModal) {
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

  const handleChangePasswordAWS = async () => {
    await dispatch(AuthActions.changePasswordAWS(oldPassword, newPassword));
    change();
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

      <KeyboardShift>
        {() => (
          <AnimatedModal
            style={{
              transform: [{ scale: scale }, { translateY: translateY }]
            }}
          >
            <TextContainer>
              <Entypo
                name="circle-with-cross"
                size={23}
                onPress={change}
                style={{
                  position: "absolute",
                  top: -10,
                  right: -15,
                  margin: 5
                }}
              />
              <TextInput
                keyboardType="default"
                placeholder="Old Password"
                secureTextEntry={true}
                onChangeText={password => setOldPassword(password)}
              />
            </TextContainer>
            <TextContainer>
              <TextInput
                keyboardType="default"
                placeholder="New Password"
                secureTextEntry={true}
                onChangeText={password => setNewPassword(password)}
              />
            </TextContainer>
            <Button
              style={{ backgroundColor: "#ee4540" }}
              onPress={handleChangePasswordAWS}
            >
              <Text>Change</Text>
            </Button>
          </AnimatedModal>
        )}
      </KeyboardShift>
    </AnimatedContainer>
  );
};

export default PasswordModal;

const Container = styled.View`
  /* position: absolute; */
  top: -140px;
  left: 0;
  width: 100%;
  height: ${screenHeight + 50}px;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
  z-index: 105;
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

const TextContainer = styled.View`
  position: relative;
  align-self: center;
  margin: 5px 0;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

const Button = styled.TouchableOpacity`
  width: 295px;
  height: 55px;
  margin: 10px;
  align-self: center;
  border-radius: 10px;
  elevation: 6;
  margin-top: 25px;
`;

const Text = styled.Text`
  color: black;
  font-size: 18px;
  text-align: center;
  padding-top: 12px;
`;
