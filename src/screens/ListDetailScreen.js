import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { Dimensions, Picker, FlatList } from "react-native";
import moment from "moment";
import ListDetailProductBox from "../components/lists/ListDetailProductBox";
import { useSelector, useDispatch } from "react-redux";
import * as ListActions from "../../store/actions/listActions";
import * as CategoryAction from "../../store/actions/categoryActions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const ListDetailScreen = ({ route, navigation }) => {
  const list = route.params.list;

  const updatedList = useSelector(state => state.list.updatedList);
  const allList = useSelector(state => state.list.lists);
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // Preload all categories
  useEffect(() => {
    getAllCategories();
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [dispatch]);

  const getAllCategories = useCallback(async () => {
    await dispatch(CategoryAction.getCategoriesAWS());
  }, [dispatch]);

  // Filter dropdown array
  const catName = categories.map(c => c.categoryName);
  const cat = ["All", ...catName];
  const [selectedCat, setSelectedCat] = useState("");

  // Filter output object
  let filteredList = { ...list };

  if (selectedCat) {
    filteredList.products = list.products.filter(
      prod => prod.categoryName == selectedCat
    );
  }

  // Total Cost Calculator
  const totalArr = list.products.reduce(
    (total, prod) => total + prod.toBuyNumber * prod.unitPrice,
    0
  );

  const headerComp = () => (
    <>
      <Date>{moment(list.createdDate).format("MMM - DD - YYYY")}</Date>
      <Cost>
        Total Cost: <Price> &#163; {totalArr}</Price>
      </Cost>
      <Filter>
        <CatTitle>Categories : </CatTitle>
        <Picker
          selectedValue={selectedCat}
          mode="dropdown"
          style={{ height: 50, width: 200, color: "white" }}
          onValueChange={(itemValue, itemIndex) => setSelectedCat(itemValue)}
          itemStyle={{ textTransform: "capitalize" }}
          pickerStyleType={{ color: "white" }}
        >
          {cat.map((c, index) => (
            <Picker.Item key={index} label={c.toUpperCase()} value={c} />
          ))}
        </Picker>
      </Filter>
      <Button onPress={() => navigation.navigate("Cam")}>
        <MaterialCommunityIcons name="qrcode-scan" color="#22EBD3" size={23} />
      </Button>
    </>
  );

  const handleSubmit = async () => {
    await dispatch(ListActions.setCompletedListAWS(updatedList, allList));
  };

  return (
    <Container>
      {selectedCat == "All" ? (
        <FlatList
          data={list.products}
          keyExtractor={item => item.id}
          ListHeaderComponent={headerComp}
          ListFooterComponent={() => (
            <Submit onPress={handleSubmit}>
              <Text>Finished</Text>
            </Submit>
          )}
          renderItem={({ item }) => (
            <ListDetailProductBox
              prod={item}
              currentList={list}
              navigation={navigation}
            />
          )}
        />
      ) : (
        <FlatList
          data={filteredList.products}
          keyExtractor={item => item.id}
          ListHeaderComponent={headerComp}
          ListFooterComponent={() => (
            <Submit onPress={handleSubmit}>
              <Text>Finished</Text>
            </Submit>
          )}
          renderItem={({ item }) => (
            <ListDetailProductBox
              prod={item}
              currentList={list}
              navigation={navigation}
            />
          )}
        />
      )}
    </Container>
  );
};

export default ListDetailScreen;

const Container = styled.View`
  flex-grow: 1;
  background: #24273c;
`;
const ListContainer = styled.View`
  width: ${width / 1.2}px;
  height: 80px;
  background-color: white;
  align-self: center;
  border-radius: 10px;
  margin: 20px 0;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 24px;
  color: white;
  padding-top: 7.5px;
`;

const Submit = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  align-self: center;
  border-radius: 10px;
  background-color: #e14594;
  margin-bottom: 25px;
`;
const Date = styled.Text`
  color: #ff6363;
  font-size: 32px;
  text-align: left;
  padding-left: 20px;
`;
const Cost = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: left;
  padding-left: 20px;
`;
const Price = styled.Text`
  color: #ff6363;
  font-size: 24px;
  text-align: left;
  padding-left: 20px;
`;
const Filter = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CatTitle = styled.Text`
  color: white;
  padding: 20px;
  font-size: 18px;
`;

const Button = styled.TouchableOpacity`
  /* background-color: white;
  width: 50%;
  height: 50%; */
  position: absolute;
  top: 100px;
  right: 30px;
  z-index: 20;
`;
