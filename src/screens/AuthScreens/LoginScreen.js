import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dimensions, Platform, StatusBar, Alert } from "react-native";
import KeyboardShift from "../../components/UI/KeyboardShift";
import * as AuthActions from "../../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../../components/UI/ErrorModal";
import Success from "./../../components/UI/Success";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const errorState = useSelector(state => state.auth.error);

  const userSuccess = useSelector(state => state.auth.userSuccess);

  const handleSignin = async () => {
    await dispatch(AuthActions.signin(email, password));
    setTimeout(
      async () => await dispatch(AuthActions.getCurrentAuthenticatedUser()),
      1000
    );
  };

  return (
    <Container>
      <Title>Sign In</Title>
      {errorState ? <ErrorModal /> : null}
      {/* {userSuccess ? <Success isActive={true} /> : null} */}
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
                placeholder="Password"
                keyboardType="default"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              />
            </TextContainer>

            <Button
              style={{ backgroundColor: "#ee4540" }}
              onPress={handleSignin}
            >
              <Text>Submit</Text>
            </Button>
          </CardContainer>
        )}
      </KeyboardShift>
    </Container>
  );
};

export default LoginScreen;

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
  text-transform: capitalize;
  /* width: 250px; */
`;

const CardContainer = styled.View`
  background-color: white;
  width: ${windowWidth / 1.25}px;
  height: ${windowHeight / 1.75}px;
  align-self: center;
  margin-top: 25px;
  border-radius: 10px;
  elevation: 6;
`;

const ImageContainer = styled.View`
  width: ${windowWidth / 3}px;
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
