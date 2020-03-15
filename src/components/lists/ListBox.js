import React, { useState } from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import moment from "moment";
import { Ionicons, Entypo } from "@expo/vector-icons";

import OptionsMainList from "./OptionsMainList";

const { width, height } = Dimensions.get("window");

const ListBox = ({ list }) => {
  const [optionsToggle, setOptionsToggle] = useState(false);
  const totalArr = list.products.reduce(
    (total, prod) => total + prod.toBuyNumber * prod.unitPrice,
    0
  );

  return (
    <Container>
      {list ? (
        <>
          <Date>{moment(list.createdDate).format("MMM DD")} </Date>
          <DateSub>{moment(list.createdDate).fromNow()} </DateSub>
          <Total>&#163;{totalArr}</Total>
          <Entypo
            name="chevron-thin-right"
            color="black"
            size={23}
            style={{ position: "absolute", top: 25, right: 20 }}
          />
          <OptionsButton onPress={() => setOptionsToggle(!optionsToggle)}>
            <Entypo name="dots-three-vertical" size={18} color="#a32f80" />
          </OptionsButton>
          {optionsToggle ? <OptionsMainList lID={list.id} /> : null}
        </>
      ) : (
        <Title>Tou've got no list for the day</Title>
      )}
    </Container>
  );
};

export default ListBox;

const Container = styled.View`
  width: ${width / 1.2}px;
  height: 75px;
  align-self: center;
  border-radius: 10px;
  background-color: #eeeeee;
  margin: 15px 0;
`;

const Date = styled.Text`
  color: #7045af;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 10px;
  text-align: left;
`;
const Title = styled.Text`
  color: #7045af;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 10px;
  text-align: left;
`;

const DateSub = styled.Text`
  color: #e14594;
  font-size: 16px;
  padding-left: 20px;
  text-align: left;
`;
const Total = styled.Text`
  color: black;
  font-size: 16px;
  text-align: left;
  position: absolute;
  top: 30px;
  left: 200px;

  text-align: center;
`;

const OptionsButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 5px;
`;
