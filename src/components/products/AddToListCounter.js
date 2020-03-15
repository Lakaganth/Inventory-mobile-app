import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as ListActions from "../../../store/actions/listActions";
import moment from "moment";

/**
 *
 * ProductListComponent
 */

const AddToListCounter = ({ item, cName }) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(item.toBuyNumber);

  const productList = {
    id: item.id,
    pname: item.pname,
    img: item.img,
    pack: item.pack,
    size: item.size,
    unitPrice: item.unitPrice,
    currentInventory: item.currentInventory,
    addToList: true,
    toBuyNumber: add,
    invenotryDate: item.invenotryDate,
    purchaseComplete: false,
    categoryName: cName
  };

  const decAdd = () => {
    if (add <= 0) {
      return setAdd(0);
    } else {
      return setAdd(add - 1);
    }
  };

  const incAdd = () => setAdd(add + 1);

  const handleAddSubmit = async () => {
    await dispatch(ListActions.addtoListAWS(productList));
  };
  return (
    <Container>
      <Button onPress={decAdd}>
        <AntDesign name="minuscircleo" size={28} color="orange" />
      </Button>
      <ValueContainer>
        <Value>{add}</Value>
      </ValueContainer>
      <Button onPress={incAdd}>
        <AntDesign name="pluscircleo" size={28} color="green" />
      </Button>
      <Button onPress={handleAddSubmit}>
        <AntDesign name="rightcircleo" size={28} />
      </Button>
    </Container>
  );
};

export default AddToListCounter;

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
