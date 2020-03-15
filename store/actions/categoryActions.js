import { Auth, API, graphqlOperation } from "aws-amplify";
import { getCategory, listCategorys } from "./../../src/graphql/queries";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const GET_PRODUCTS_FROM_CATEGORY = "GET_PRODUCTS_FROM_CATEGORY";
export const REMOVE_FETCHED_PRODUCTS_FROM_CATEGORY =
  "REMOVE_FETCHED_PRODUCTS_FROM_CATEGORY";
export const ERROR_CATEGORY = "ERROR_CATEGORY";
export const RESET_ERROR_CATEGORY = "RESET_ERROR_CATEGORY";

// export const getCategoryAWS = () => {
//     return async dispatch =>{
//         try {

//         } catch (err) {
//             return dispatch({type:ERROR_CATEGORY, error:err})
//         }
//     }
// }
export const getCategoriesAWS = () => {
  return async dispatch => {
    try {
      const result = await API.graphql(graphqlOperation(listCategorys));

      return dispatch({
        type: GET_CATEGORIES,
        categories: result.data.listCategorys.items
      });
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};

export const getSingleCategoryAWS = cID => {
  return async dispatch => {
    try {
      const id = cID;
      const res = await API.graphql(graphqlOperation(getCategory, { id }));

      return dispatch({
        type: GET_PRODUCTS_FROM_CATEGORY,
        productsFromCategories: res.data.getCategory.products.items
      });
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};

export const removeFetchedCategoriesAWS = () => {
  return async dispatch => {
    try {
      return dispatch({ type: REMOVE_FETCHED_PRODUCTS_FROM_CATEGORY });
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};
