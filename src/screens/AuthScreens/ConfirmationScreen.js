import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  Dimensions,
  FlatList,
  Animated,
  ScrollView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  UIManager
} from "react-native";
import KeyboardShift from "../../components/UI/KeyboardShift";
import { useDispatch, useSelector } from "react-redux";
import * as AuthActions from "../../../store/actions/authActions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ConfirmationScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.currentUser);

  useEffect(() => {
    getCognitoUser();
  }, [dispatch]);

  const getCognitoUser = useCallback(async () => {
    await dispatch(AuthActions.getCurrentAuthenticatedUser());
  }, [dispatch]);

  const handleConfrimation = async () => {
    await dispatch(AuthActions.confirmRegister(email, code));
    setEmail("");
    setCode("");
  };

  return (
    <Container>
      <Title>Confirm Registration</Title>

      <KeyboardShift>
        {() => (
          <CardContainer>
            <ImageContainer>
              <Image
                source={require("../../../assets/images/welcome/login.png")}
              />
            </ImageContainer>

            <TextContainer>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={email => setEmail(email)}
              />
            </TextContainer>
            <TextContainer>
              <TextInput
                placeholder="Code"
                keyboardType="default"
                secureTextEntry={false}
                onChangeText={code => setCode(code)}
              />
            </TextContainer>
            <Button
              style={{ backgroundColor: "#ee4540" }}
              onPress={handleConfrimation}
            >
              <Text>Confirm</Text>
            </Button>
          </CardContainer>
        )}
      </KeyboardShift>
    </Container>
  );
};

export default ConfirmationScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #801336;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight + 20
    : 0}px;
  padding-bottom: 15px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 32px;
  color: white;
  text-transform: uppercase;
  /* width: 250px; */
`;

const CardContainer = styled.View`
  background-color: white;
  width: ${windowWidth / 1.25}px;
  height: ${windowHeight / 1.5}px;
  align-self: center;
  margin-top: 25px;
  border-radius: 10px;
`;

const ImageContainer = styled.View`
  width: ${windowWidth / 3.5}px;
  height: ${windowHeight / 5}px;
  align-self: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.View`
  position: relative;
  align-self: center;
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
  color: white;
  font-size: 18px;
  text-align: center;
  padding-top: 12px;
`;
