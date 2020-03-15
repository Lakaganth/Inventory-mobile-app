import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import moment from "moment";
import * as ListActions from "../../../store/actions/listActions";

import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OptionsList from "./OptionsList";

const { width, height } = Dimensions.get("window");

const ListDetailProductBox = ({ prod, currentList }) => {
  const dispatch = useDispatch();
  const [optionsToggle, setOptionsToggle] = useState(false);

  const {
    pname,
    id,
    pack,
    size,
    purchaseComplete,
    toBuyNumber,
    currentInventory,
    invenotryDate,
    unitPrice
  } = prod;

  const [comp, setComp] = useState(purchaseComplete);

  const setCompletion = async () => {
    await setComp(!comp);
    await dispatch(ListActions.setPurchaseComplete(id, currentList, !comp));
  };

  return (
    <Container>
      <Column>
        <LeftColumn>
          <PName>{pname}</PName>
          <Size>
            {pack} X {size}
          </Size>
          <Inv>
            Inv: {currentInventory} - {""}
            {moment(invenotryDate).format("MMM DD")}
          </Inv>
        </LeftColumn>
        <RightColumn>
          <TextBox>
            <ToBuy>{toBuyNumber}</ToBuy>
            <Cost>Unit: &#163; {unitPrice}</Cost>
            <TotalCost>Total: &#163; {unitPrice * toBuyNumber}</TotalCost>
          </TextBox>
          <Button onPress={setCompletion}>
            {comp ? (
              <FontAwesome name="check-circle-o" size={23} color="#7045af" />
            ) : (
              <FontAwesome name="circle-o" size={23} color="#5a3d5c" />
            )}
          </Button>
          <OptionsButton onPress={() => setOptionsToggle(!optionsToggle)}>
            <Entypo name="dots-three-vertical" size={20} color="#a32f80" />
          </OptionsButton>
          {optionsToggle ? (
            <OptionsList pId={id} currentList={currentList} />
          ) : null}
        </RightColumn>
      </Column>
    </Container>
  );
};

export default ListDetailProductBox;

const Container = styled.View`
  width: ${width / 1.2}px;
  height: 120px;
  background-color: #eeeeee;
  align-self: center;
  border-radius: 10px;
  margin: 20px 0;
  elevation: 6;
`;

const Column = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const LeftColumn = styled.View`
  width: 50%;
`;
const RightColumn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 0 10px;
`;

const Text = styled.Text``;
const Cost = styled.Text`
  text-align: center;
`;
const TotalCost = styled.Text`
  text-align: center;
`;
const TextBox = styled.View``;
const PName = styled.Text`
  font-size: 24px;
  padding: 10px 0 0 10px;
  color: #7045af;
`;
const ToBuy = styled.Text`
  text-align: center;
  font-size: 24px;
  color: #5c5470;
`;
const Size = styled.Text`
  padding: 0 0 0 10px;
  color: #e14594;
`;
const Inv = styled.Text`
  padding: 0 0 0 10px;
  color: gray;
`;

const Button = styled.TouchableOpacity``;

const OptionsButton = styled.TouchableOpacity`
  position: absolute;
  top: -15px;
  right: 0;
`;
