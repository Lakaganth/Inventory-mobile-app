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
import ErrorModal from "./../../components/UI/ErrorModal";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");

  const dispatch = useDispatch();
  const errorState = useSelector(state => state.auth.error);

  useEffect(() => {
    if (errorState) {
      setError(errorState);
    }
  }, [errorState]);

  // const getCognitoUser = useCallback(async () => {
  //   await dispatch(AuthActions.getCurrentAuthenticatedUser());
  // }, [dispatch]);

  const handleRegister = async () => {
    await dispatch(AuthActions.register(username, password, email));

    if (!err) {
      navigation.navigate("confirm", { email });
    }
  };

  return (
    <Container>
      <Title>Register</Title>
      {errorState ? <ErrorModal /> : null}

      <KeyboardShift>
        {() => (
          <CardContainer>
            <ImageContainer>
              <Image
                source={require("../../../assets/images/welcome/register.png")}
              />
            </ImageContainer>
            <TextContainer>
              <TextInput
                placeholder="Name"
                keyboardType="default"
                onChangeText={username => setUsername(username)}
              />
            </TextContainer>
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
              style={{ backgroundColor: "#801336" }}
              onPress={handleRegister}
            >
              <Text>Submit</Text>
            </Button>
          </CardContainer>
        )}
      </KeyboardShift>
    </Container>
  );
};

export default RegisterScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ee4540;
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
  height: ${windowHeight / 1.5}px;
  align-self: center;
  margin-top: 25px;
  border-radius: 10px;
`;

const ImageContainer = styled.View`
  width: ${windowWidth / 2}px;
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
