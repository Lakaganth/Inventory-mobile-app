import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import * as ProductActions from "../../store/actions/productActions";
import * as CategoryActions from "../../store/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { FlatList, Dimensions } from "react-native";
import OptionsProduct from "../components/products/OptionsProduct";
import ProductListComponent from "../components/products/ProductListComponent";

const { width, height } = Dimensions.get("window");

const ProductScreen = ({ route, navigation }) => {
  const cID = route.params.cID;
  const category = route.params.category;
  const dispatch = useDispatch();
  const productsFromCategories = useSelector(
    state => state.categories.productsFromCategories
  );

  const [optionsToggle, setOptionsToggle] = useState(false);

  useEffect(() => {
    getAllProductsRedux();

    return () => {
      removeRroductsFromCategoriesRedux();
    };
  }, [dispatch]);

  const getAllProductsRedux = useCallback(async () => {
    await dispatch(CategoryActions.getSingleCategoryAWS(cID));
  }, [dispatch]);

  const removeRroductsFromCategoriesRedux = useCallback(async () => {
    await dispatch(CategoryActions.removeFetchedCategoriesAWS());
  }, [dispatch]);

  const headerComponent = () => (
    <TitleContainer>
      <Title>{category.categoryName}</Title>
      <Button onPress={() => navigation.navigate("AddProduct", { cID })}>
        <Ionicons name="ios-add-circle" size={50} color="#a32f80" />
      </Button>
    </TitleContainer>
  );

  const renderProductList = item => (
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
          <OptionsButton onPress={() => setOptionsToggle(!optionsToggle)}>
            <Entypo
              name="dots-three-vertical"
              size={25}
              color="#a32f80"
              // style={{ position: "absolute", top: -25, right: -150 }}
            />
          </OptionsButton>
          {optionsToggle ? <OptionsProduct pID={item.id} /> : null}
        </RightColumn>
      </Columns>
    </ProductContainer>
  );

  return (
    <Container>
      <ProductList>
        {productsFromCategories ? (
          <FlatList
            data={productsFromCategories}
            ListHeaderComponent={headerComponent}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ProductListComponent
                item={item}
                cID={cID}
                cName={category.categoryName}
                navigation={navigation}
              />
            )}
          />
        ) : null}
      </ProductList>
    </Container>
  );
};

export default ProductScreen;

const Container = styled.View`
  background: #24273c;
  flex: 1;
`;
const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.Text`
  color: #ff6363;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 20px;
  text-transform: capitalize;
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

const ProductList = styled.View`
  background: #24273c;
  flex: 1;
`;
const ProductContainer = styled.View`
  width: ${width / 1.1}px;
  height: 150px;
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
  /* position: absolute;
  top: 25px;
  right: -150px; */
`;
