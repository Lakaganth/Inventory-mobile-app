import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KeyboardShift from "../UI/KeyboardShift";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions, Platform, StatusBar, ScrollView } from "react-native";
import * as ProductActions from "../../../store/actions/productActions";
import { API, graphqlOperation } from "aws-amplify";
import { onUpdateCategory } from "../../graphql/subscriptions";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EditProductForm = ({ route, navigation }) => {
  const product = route.params.product;
  console.log(product);
  const dispatch = useDispatch();

  const [editProduct, setEditProduct] = useState({
    pname: product.pname,
    img: product.img,
    pack: product.pack,
    size: product.size,
    unitPrice: product.unitPrice,
    currentInventory: product.currentInventory,
    addToList: product.addToList,
    toBuyNumber: product.toBuyNumber
  });

  const { pname, pack, size, unitPrice, addToList, toBuyNumber } = editProduct;

  const handleSubmit = async e => {
    e.preventDefault();
    const input = {
      id: product.id,
      pname,
      pack: parseInt(pack),
      size,
      unitPrice: parseInt(unitPrice),
      addToList,
      toBuyNumber
    };
    await dispatch(ProductActions.editProductAWS(input));
    console.log("Success");
    navigation.navigate("Category");
  };

  return (
    <Container>
      <ScrollView>
        <Title>Edit Product</Title>
        <KeyboardShift>
          {() => (
            <CardContainer>
              <TextContainer>
                <TextInput
                  placeholder="Product Name"
                  keyboardType="default"
                  returnKeyType={"next"}
                  value={editProduct.pname}
                  onChangeText={pname =>
                    setEditProduct({ ...editProduct, pname })
                  }
                />
                <TextInput
                  placeholder="Product pack eg: 4-pack"
                  keyboardType="number-pad"
                  returnKeyType={"next"}
                  value={editProduct.pack.toString()}
                  onChangeText={pack =>
                    setEditProduct({ ...editProduct, pack })
                  }
                />
                <TextInput
                  placeholder="Product Size eg: 4 X 500ml "
                  keyboardType="default"
                  returnKeyType={"next"}
                  value={editProduct.size}
                  onChangeText={size =>
                    setEditProduct({ ...editProduct, size })
                  }
                />
                <TextInput
                  placeholder="Price"
                  keyboardType="decimal-pad"
                  returnKeyType={"next"}
                  value={editProduct.unitPrice.toString()}
                  onChangeText={unitPrice =>
                    setEditProduct({ ...editProduct, unitPrice })
                  }
                />
                {/* <TextInput
                  placeholder="Today's Inventory"
                  keyboardType="decimal-pad"
                  returnKeyType={"next"}
                  value={editProduct.currentInventory.toString()}
                  onChangeText={currentInventory =>
                    setEditProduct({ ...newProduct, currentInventory })
                  }
                /> */}
              </TextContainer>
              <Button onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
              </Button>
            </CardContainer>
          )}
        </KeyboardShift>
      </ScrollView>
    </Container>
  );
};

export default EditProductForm;

const Container = styled.View`
  background: #24273c;
  flex: 1;
`;

const Title = styled.Text`
  color: #ff6363;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 20px;
  text-transform: capitalize;
`;

const CardContainer = styled.View`
  background-color: white;
  width: ${windowWidth / 1.25}px;
  /* height: ${windowHeight / 1.75}px; */
  align-self: center;
  margin-top: 25px;
  padding-bottom: 25px;
  border-radius: 10px;
  elevation: 6;
`;

const TextContainer = styled.View`
  position: relative;
  align-self: center;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

const Button = styled.TouchableOpacity`
  /* background-color: white; */
  /* width: 50px;
  height: 50px; */
  padding-top: 20px;
  padding-right: 20px;
  border-radius: 50px;
  align-self: flex-end;
  align-self: center;
`;
const ButtonText = styled.Text`
  color: #ff6363;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;
