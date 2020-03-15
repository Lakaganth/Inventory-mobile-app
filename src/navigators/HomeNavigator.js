import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../screens/HomeScreen";
import CategoryScreen from "./../screens/CategoryScreen";
import ProductScreen from "./../screens/ProductScreen";
import NewProductForm from "./../components/products/NewProductForm";
import ListDetailScreen from "./../screens/ListDetailScreen";
import EditProductForm from "./../components/products/EditProductForm";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "Category",
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          title: "Products",
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
      <Stack.Screen
        name="AddProduct"
        component={NewProductForm}
        options={{
          title: "New Product",
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductForm}
        options={{
          title: "Edit Product",
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
      <Stack.Screen
        name="List"
        component={ListDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#161616"
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            width: "100%"
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
