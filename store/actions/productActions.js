import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../src/graphql/queries";
import { createProduct, deleteProduct } from "../../src/graphql/mutations";
import { updateProduct } from "./../../src/graphql/mutations";

export const GET_PRODUCT = "GET_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const ERROR_PRODUCT = "ERROR_PRODUCT";
export const RESET_ERROR_PRODUCT = "RESET_ERROR_PRODUCT";

// export const getCategoryAWS = () => {
//     return async dispatch =>{
//         try {

//         } catch (err) {
//             return dispatch({type:ERROR_CATEGORY, error:err})
//         }
//     }
// }

export const getAllProductsAWS = () => {
  return async dispatch => {
    try {
      const response = await API.graphql(graphqlOperation(listProducts));
      console.log(response);
    } catch (err) {
      return dispatch({ type: ERROR_PRODUCT, error: err });
    }
  };
};

export const createNewProductAWS = input => {
  return async dispatch => {
    try {
      console.log(input);
      const res = await API.graphql(
        graphqlOperation(createProduct, { input: input })
      );
      return dispatch({
        type: CREATE_PRODUCT
      });
    } catch (err) {
      return dispatch({ type: ERROR_PRODUCT, error: err });
    }
  };
};

export const deleteroductAWS = id => {
  return async dispatch => {
    try {
      const input = { id };
      const res = await API.graphql(graphqlOperation(deleteProduct, { input }));
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};

export const changeInventoryAWS = (id, inv) => {
  return async dispatch => {
    try {
      const input = {
        id,
        currentInventory: inv
      };

      const res = await API.graphql(graphqlOperation(updateProduct, { input }));

      console.log(res);
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};

export const editProductAWS = input => {
  return async dispatch => {
    try {
      const res = await API.graphql(graphqlOperation(updateProduct, { input }));

      console.log(res);
    } catch (err) {
      return dispatch({ type: ERROR_PRODUCT, error: err });
    }
  };
};
