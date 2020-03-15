import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as ProductActions from "../../../store/actions/productActions";

/**
 *
 * ProductListComponent
 */

const InventoryCounter = ({ item }) => {
  const dispatch = useDispatch();
  const [inv, setInv] = useState(item.currentInventory);

  const decInv = () => {
    if (inv <= 0) {
      return setInv(0);
    } else {
      return setInv(inv - 1);
    }
  };

  const incInv = () => setInv(inv + 1);

  const handleInvSubmit = async () => {
    await dispatch(ProductActions.changeInventoryAWS(item.id, inv));
  };

  return (
    <Container>
      <Button onPress={decInv}>
        <AntDesign name="minuscircleo" size={28} color="orange" />
      </Button>
      <ValueContainer>
        <Value>{inv}</Value>
      </ValueContainer>
      <Button onPress={incInv}>
        <AntDesign name="pluscircleo" size={28} color="green" />
      </Button>
      <Button onPress={handleInvSubmit}>
        <AntDesign name="rightcircleo" size={28} />
      </Button>
    </Container>
  );
};

export default InventoryCounter;

const Container = styled.View`
  /* background-color: black; */
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  width: 225px;
  height: 50px;
  margin-top: 25px;
`;

const Button = styled.TouchableOpacity`
  /* border: 1px solid green; */
  width: 30px;
  height: 30px;
  border-radius: 5px;
  align-self: center;
`;

const ValueContainer = styled.View`
  /* border: 1px solid red; */
  width: 50px;
  height: 30px;
  border-radius: 5px;
  align-self: center;
  background-color: black;
`;

const Value = styled.Text`
  font-size: 20px;
  align-self: center;
  color: white;
`;
