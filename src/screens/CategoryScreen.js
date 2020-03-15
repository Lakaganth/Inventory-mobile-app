import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { ScrollView, FlatList } from "react-native";
import CategoryBox from "../components/products/CategoryBox";
import { useDispatch, useSelector } from "react-redux";
import * as CategoryAction from "../../store/actions/categoryActions";

const CategoryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  useEffect(() => {
    getAllCategories();
  }, [dispatch]);

  const getAllCategories = useCallback(async () => {
    await dispatch(CategoryAction.getCategoriesAWS());
  }, [dispatch]);

  return (
    <Container>
      <ScrollView>
        <Title>Select Category ... </Title>
        {/* <Button>
          <ButtonText>Add </ButtonText>
        </Button> */}
        <CategoryGrid>
          {categories
            ? categories.map(c => {
                return (
                  <CategoryBox
                    key={c.id}
                    cID={c.id}
                    name={c.categoryName}
                    img={c.img}
                    category={c}
                    navigation={navigation}
                  />
                );
              })
            : null}
          {/* <FlatList
          data={category}
          ListHeaderComponent={headerCategoryComponent}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryBox name={item.categoryName} img={item.img} />
            )}
          /> */}
        </CategoryGrid>
      </ScrollView>
    </Container>
  );
};

export default CategoryScreen;

const Container = styled.View`
  background: #24273c;
  flex: 1;
`;

const Title = styled.Text`
  color: #ff6363;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 20px;
`;

const CategoryGrid = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  /* margin: 20px 0;
  flex: 1; */
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  width: 150px;
  height: 50px;
  align-self: flex-end;
`;
const ButtonText = styled.Text`
  color: #ff6363;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;

const category = [
  {
    id: 1,
    categoryName: "Beer",
    img:
      "https://images.unsplash.com/photo-1516128043650-037fbdbd0b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    categoryName: "Chilled",
    img:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
  },
  {
    id: 3,
    categoryName: "Chocolates",
    img:
      "https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 4,
    categoryName: "Cigaratte",
    img:
      "https://images.unsplash.com/photo-1529923362234-6a635b96eb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 5,
    categoryName: "Energy Drinks",
    img:
      "https://images.unsplash.com/photo-1580859297753-0b52fa0fc46e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
  },
  {
    id: 6,
    categoryName: "Newspaper",
    img:
      "https://images.unsplash.com/photo-1547316020-8365dfabe141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  }
];
