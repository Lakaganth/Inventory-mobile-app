import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ProductActions from "../../../store/actions/productActions";
import * as ListActions from "../../../store/actions/listActions";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { API, graphqlOperation } from "aws-amplify";
import { onUpdateCategory } from "../../graphql/subscriptions";
const { width, height } = Dimensions.get("window");

const OptionsMainList = ({ lID }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(ListActions.deleteListAWS(lID));
  };

  return (
    <Container>
      <OptionsRow>
        <Button onPress={handleDelete}>
          <Entypo name="cross" size={32} color="red" />
        </Button>
        <Text>Delete Product</Text>
      </OptionsRow>
    </Container>
  );
};

export default OptionsMainList;

const Container = styled.View`
  width: 320px;
  height: 100px;
  background-color: black;
  margin: 0px 50px 0 0;
  /* margin-right: ${width / 2}px; */
  border-radius: 10px;

  position: absolute;
  top: 30px;
  right: -55px;
`;

const OptionsRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  color: white;
  text-transform: capitalize;
`;

const Button = styled.TouchableOpacity`
  /* background-color: white; */
  /* width: 50%;
  height: 50%; */
  /* position: absolute;
  top: 10px;
  left: 10px;
  z-index: 20; */
`;
