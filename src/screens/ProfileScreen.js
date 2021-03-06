import React, { useState } from "react";
import styled from "styled-components";

import { TouchableOpacity, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as AuthActions from "../../store/actions/authActions";
import Success from "../components/UI/Success";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import PasswordModal from "../components/UI/PasswordModal";

const { width, height } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const user = useSelector(state => state.auth.user);
  const currentUser = useSelector(state => state.auth.currentUser);
  const [changePassword, setChangePassword] = useState(false);

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await dispatch(AuthActions.userSignOut());
  };

  const handleChangePassword = async () => {
    setChangePassword(!changePassword);
    // await dispatch(AuthActions.changePasswordAWS());
  };

  let verified = user.attributes.email_verified;
  // verified = true;

  // console.log(user);
  // console.log("currentUser", currentUser);

  return (
    <Container>
      {changePassword ? (
        <PasswordModal
          showModal={changePassword}
          change={handleChangePassword}
        />
      ) : null}
      <ProfileCard>
        <ImageContainer>
          <Image
            source={require("../../assets/images/user/default_avatar.png")}
          />
        </ImageContainer>
        {/* <Title>{currentUser.data.getUser.username}</Title>
        <SubTitle>{currentUser.data.getUser.email}</SubTitle> */}
      </ProfileCard>
      <UserActions>
        {!verified ? (
          <ActionRow>
            <Button
              style={{ backgroundColor: "purple" }}
              // onPress={() => navigation.navigate("email-confirmation")}
            >
              <MaterialCommunityIcons
                name="email-alert"
                size={23}
                color="white"
                style={{ alignSelf: "center", paddingTop: 7 }}
              />
            </Button>
            <ActionName>Verify Email</ActionName>
          </ActionRow>
        ) : null}
        <ActionRow>
          <Button
            style={{ backgroundColor: "orange" }}
            onPress={handleChangePassword}
          >
            <MaterialCommunityIcons
              name="lock-reset"
              size={23}
              color="white"
              style={{ alignSelf: "center", paddingTop: 7 }}
            />
          </Button>
          <ActionName>Change Password</ActionName>
        </ActionRow>
        <ActionRow>
          <Button onPress={handleSignOut}>
            <Feather
              name="log-out"
              size={23}
              color="white"
              style={{ alignSelf: "center", paddingTop: 7 }}
            />
          </Button>
          <ActionName>SignOut</ActionName>
        </ActionRow>
      </UserActions>

      {/* <Text>Profile Screen</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>LogOut</Text>
      </TouchableOpacity> */}
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.View`
  flex-grow: 1;
  background: #24273c;
  position: relative;
`;

const ProfileCard = styled.View`
  width: 100%;
  height: ${height / 2.25}px;
  background-color: #7045af;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  elevation: 6;
`;

const ImageContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  margin-top: 25px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 32px;
  padding-top: 20px;
  align-self: center;
`;
const SubTitle = styled.Text`
  color: white;
  font-size: 24px;
  padding-top: 10px;
  align-self: center;
`;

const UserActions = styled.View`
  margin: 35px 100px 10px 30px;
`;
const ActionRow = styled.View`
  flex-direction: row;
  /* width: 50%; */
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 30px;
`;
const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 10px;
`;
const ActionName = styled.Text`
  color: white;
  font-size: 23px;
  align-self: flex-start;
`;
