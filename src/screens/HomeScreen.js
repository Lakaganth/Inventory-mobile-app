import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import * as ListActions from "../../store/actions/listActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { ScrollView } from "react-native";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allList = useSelector(state => state.list.lists);
  // const [todayList, setTodayList] = useState("");

  const todayDate = moment()
    .startOf("day")
    .format("YYYY-MM-DD");

  useEffect(() => {
    getListsRedux();
  }, [dispatch]);

  const getListsRedux = useCallback(async () => {
    await dispatch(ListActions.getAllListAWS());
  }, [dispatch]);

  let todayList = [];

  if (allList) {
    // console.log("hello", todayDate);
    todayList = allList.filter(list => {
      const listDate = moment(list.createdDate).format("YYYY-MM-DD");
      // console.log(listDate == todayDate);
      return listDate == todayDate;
    });
  }

  return (
    <Container>
      <ScrollView behaviour="height">
        <Title>Welcome Back, </Title>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Category")}
        >
          <ButtonContainer
            style={{
              shadowColor: "#fff",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5
            }}
          >
            <ImageScanContainer>
              <Image source={require("../../assets/images/scanner.png")} />
            </ImageScanContainer>
            <ButtonText>
              <Text>Inventory</Text>
            </ButtonText>
          </ButtonContainer>
        </TouchableNativeFeedback>
        {todayList.length > 0 ? (
          todayList.map(today => (
            <TouchableOpacity
              onPress={() => navigation.navigate("List", { list: today })}
              key={today.id}
            >
              <ButtonContainer>
                <ImageListContainer>
                  <Image source={require("../../assets/images/list.png")} />
                </ImageListContainer>
                <Text>Today's List</Text>
              </ButtonContainer>
            </TouchableOpacity>
          ))
        ) : (
          <ButtonContainer onPress={() => navigation.navigate("List")}>
            <ImageListContainer>
              <Image source={require("../../assets/images/list.png")} />
            </ImageListContainer>
            <Text>Today's List</Text>
          </ButtonContainer>
        )}
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex-grow: 1;
  background: #24273c;
`;

const Title = styled.Text`
  color: #ff6363;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 20px;
`;

const ButtonContainer = styled.View`
  width: 300px;
  height: 100px;
  background-color: #ff7977;
  margin-top: 100px;
  border-radius: 6px;
  align-self: center;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ImageScanContainer = styled.View`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -60px;
  left: -50px;
`;
const ImageListContainer = styled.View`
  width: 125px;
  height: 125px;
  position: absolute;
  top: -30px;
  left: -20px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const ButtonText = styled.View``;
const Text = styled.Text`
  font-size: 36px;
  color: white;
  padding-right: 30px;
  width: 200px;
  text-align: right;
`;
