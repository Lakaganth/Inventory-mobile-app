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

const NewProductForm = ({ route, navigation }) => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.currentUser);
  // console.log(user.data.getUser.id);
  // const owner = user.data.getUser.id;

  const cID = route.params.cID;

  const [newProduct, setNewProduct] = useState({
    pname: "",
    img: "",
    pack: 0,
    size: "",
    unitPrice: 0,
    currentInventory: 0,
    addToList: false,
    toBuyNumber: 0,
    invenotryDate,
    // listDate: "",
    purchaseComplete: false
  });

  const {
    pname,
    pack,
    size,
    unitPrice,
    currentInventory,
    addToList,
    toBuyNumber,
    invenotryDate,
    listDate,
    purchaseComplete
  } = newProduct;

  // useEffect(() => {
  //   const createCategoriesListenerRedux = API.graphql(
  //     graphqlOperation(onUpdateCategory, { owner })
  //   ).subscribe({
  //     next: async categoryData => {
  //       console.log(categoryData);
  //     }
  //   });

  //   return () => {
  //     createCategoriesListenerRedux.unsubscribe();
  //   };
  // }, [dispatch]);

  const handleSubmit = async e => {
    e.preventDefault();
    const input = {
      pname,
      pack: parseInt(pack),
      size,
      unitPrice: parseInt(unitPrice),
      currentInventory: parseInt(currentInventory),
      addToList,
      toBuyNumber,
      invenotryDate: moment().startOf("day"),
      // listDate: "",
      // purchaseComplete,
      productCategoryId: cID
    };
    await dispatch(ProductActions.createNewProductAWS(input));
    console.log("Success");
    navigation.navigate("Category");
  };

  return (
    <Container>
      <ScrollView>
        <Title>New Products</Title>
        <KeyboardShift>
          {() => (
            <CardContainer>
              <TextContainer>
                <TextInput
                  placeholder="Product Name"
                  keyboardType="default"
                  returnKeyType={"next"}
                  onChangeText={pname =>
                    setNewProduct({ ...newProduct, pname })
                  }
                />
                <TextInput
                  placeholder="Product pack eg: 4-pack"
                  keyboardType="number-pad"
                  returnKeyType={"next"}
                  onChangeText={pack => setNewProduct({ ...newProduct, pack })}
                />
                <TextInput
                  placeholder="Product Size eg: 4 X 500ml "
                  keyboardType="default"
                  returnKeyType={"next"}
                  onChangeText={size => setNewProduct({ ...newProduct, size })}
                />
                <TextInput
                  placeholder="Price"
                  keyboardType="decimal-pad"
                  returnKeyType={"next"}
                  onChangeText={unitPrice =>
                    setNewProduct({ ...newProduct, unitPrice })
                  }
                />
                <TextInput
                  placeholder="Today's Inventory"
                  keyboardType="decimal-pad"
                  returnKeyType={"next"}
                  onChangeText={currentInventory =>
                    setNewProduct({ ...newProduct, currentInventory })
                  }
                />
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

export default NewProductForm;

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
