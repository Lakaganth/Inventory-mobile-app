import React, { useEffect, useCallback, useState } from "react";

import styled from "styled-components";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import OptionsProduct from "./OptionsProduct";
import InventoryCounter from "./InventoryCounter";
import AddToListCounter from "./AddToListCounter";

const { width, height } = Dimensions.get("window");

const ProductListComponent = ({ item, cID, cName, navigation }) => {
  const [optionsToggle, setOptionsToggle] = useState(false);

  return (
    <ProductContainer>
      <Columns>
        <LeftColumn>
          <Name>{item.pname}</Name>
          <DetailView>
            <Detail>
              {item.pack} pack - {item.size}
            </Detail>
          </DetailView>
          <Price> &#163;{item.unitPrice}</Price>
        </LeftColumn>
        <RightColumn>
          <InventoryText>Inventory</InventoryText>
          <InventoryCounter item={item} />
          <ListText>ADD to List</ListText>
          <AddToListCounter item={item} cName={cName} />
          <OptionsButton onPress={() => setOptionsToggle(!optionsToggle)}>
            <Entypo name="dots-three-vertical" size={25} color="#a32f80" />
          </OptionsButton>
          {optionsToggle ? (
            <OptionsProduct
              pID={item.id}
              cID={cID}
              owner={item.owner}
              product={item}
              navigation={navigation}
            />
          ) : null}
        </RightColumn>
      </Columns>
    </ProductContainer>
  );
};

export default ProductListComponent;

const ProductContainer = styled.View`
  width: ${width / 1.1}px;
  height: 200px;
  background-color: white;
  align-self: center;
  border-radius: 10px;
  margin: 12.5px 0;
`;
const Name = styled.Text`
  color: black;
  font-size: 24px;
  padding-left: 10px;
  padding-top: 20px;
  text-transform: capitalize;
`;

const Columns = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;
const LeftColumn = styled.View`
  width: 35%;
  position: relative;
`;
const DetailView = styled.View`
  flex-direction: row;
  padding-left: 10px;
  padding-top: 10px;
`;
const Detail = styled.Text`
  font-size: 18px;
`;
const Price = styled.Text`
  padding-left: 10px;
  padding-top: 10px;
  font-size: 18px;
`;
const RightColumn = styled.View`
  position: relative;
  padding-top: 35px;
  /* width: 65%; */
  /* justify-self: flex-start; */
`;
const OptionsContainer = styled.View`
  width: 800px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
`;
const OptionsButton = styled.TouchableOpacity`
  /* position: absolute; */
  top: -165px;
  right: -210px;
  position: relative;
`;

const InventoryText = styled.Text`
  font-size: 24px;
  position: absolute;
  left: 40px;
  top: 25px;
  /* color: white; */
  /* padding-right: 30px;
  width: 180px;
  text-align: right; */
`;
const ListText = styled.Text`
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 105px;
  left: 40px;
  /* color: white; */
  /* padding-right: 30px;
  width: 180px;
  text-align: right; */
`;
