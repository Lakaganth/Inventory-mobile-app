import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

const { width, height } = Dimensions.get("window");

let cardWidth = width - 40;
let cardHeight;
if (width >= 400) {
  cardWidth = (width - 60) / 2;
  cardHeight = height / 3;
}

const CategoryBox = ({ name, img, navigation, cID, category }) => {
  return (
    <Container
      onPress={() => navigation.navigate("Product", { cID, category })}
    >
      <ImageBackground source={{ uri: img }}>
        <Text>{name}</Text>
      </ImageBackground>
    </Container>
  );
};

export default CategoryBox;

const Container = styled.TouchableOpacity`
  height: ${cardHeight}px;
  width: ${cardWidth}px;
  elevation: 6;
  background: #f687b3;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  margin: 10px 15px;
`;

const Text = styled.Text`
  font-size: 34px;
  text-align: center;
  margin-top: ${cardHeight / 2}px;
  color: white;
  background-color: black;
  text-transform: capitalize;
`;

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
