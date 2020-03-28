import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import * as ProductActions from "../../../store/actions/productActions";
import * as ListActions from "../../../store/actions/listActions";
import { useSelector, useDispatch } from "react-redux";

const { width, height } = Dimensions.get("window");

const AddQRtoList = ({ route, navigation }) => {
  // Get from store

  const pID = route.params.prod;
  const dispatch = useDispatch();
  const [add, setAdd] = useState(0);
  const item = useSelector(state => state.product.scannedProduct);

  useEffect(() => {
    getScannedProduct();
  }, []);

  const getScannedProduct = useCallback(async () => {
    await dispatch(ProductActions.getSingleProduct(pID));
  }, []);

  const decAdd = () => {
    if (add <= 0) {
      return setAdd(0);
    } else {
      return setAdd(add - 1);
    }
  };

  const incAdd = () => setAdd(add + 1);

  const handleAddSubmit = async () => {
    if (item) {
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
        categoryName: item.category.categoryName
      };
      await dispatch(ListActions.addtoListAWS(productList));
    }
  };

  return (
    <Container>
      <ProductContainer>
        <Text> {item.pname}</Text>
        <ButtonContainer>
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
        </ButtonContainer>
      </ProductContainer>
    </Container>
  );
};

export default AddQRtoList;

const Container = styled.View`
  flex: 1;
  background: #24273c;
`;

const ProductContainer = styled.View`
  width: ${width / 1.2}px;
  height: 200px;
  background-color: white;
  align-self: center;
  border-radius: 10px;
  margin: 20px 0;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 24px;
  color: black;
  padding-top: 7.5px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 50px;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  /* border: 1px solid green; */
  width: 30px;
  height: 30px;
  border-radius: 5px;
  align-self: center;
  margin: 0 10px;
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
