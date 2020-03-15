import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  createList,
  updateList,
  deleteList
} from "../../src/graphql/mutations";
import { listLists } from "../../src/graphql/queries";
import moment from "moment";

export const GET_ALL_LIST = "GET_ALL_LIST";
export const CREATE_LIST = "CREATE_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const UPDATE_PURCHASE_COMPLETE = "UPDATE_PURCHASE_COMPLETE";
export const CREATE_LIST_LISTENER = "CREATE_LIST_LISTENER";
export const UPDATE_LIST_LISTENER = "UPDATE_LIST_LISTENER";
export const DELETE_LIST_LISTENER = "DELETE_LIST_LISTENER";
export const ERROR_LIST = "ERROR_LIST";
export const RESET_ERROR_LIST = "RESET_ERROR_LIST";

// export const getCategoryAWS = () => {
//     return async dispatch =>{
//         try {

//         } catch (err) {
//             return dispatch({type:ERROR_CATEGORY, error:err})
//         }
//     }
// }

export const addtoListAWS = productList => {
  return async dispatch => {
    try {
      const input = {
        createdDate: moment().startOf("day"),
        completed: false,
        products: [productList]
      };

      const todayDate = moment().startOf("day");

      const getList = await API.graphql(
        graphqlOperation(listLists, {
          filter: {
            createdDate: {
              eq: todayDate
            }
          }
        })
      );
      //    Create new List
      if (getList.data.listLists.items.length <= 0) {
        const res = await API.graphql(graphqlOperation(createList, { input }));
        console.log("NEW", res);
      } else {
        const existinglist = getList.data.listLists.items[0];

        const prod = getList.data.listLists.items[0].products;

        const prodExistsIndex = prod.findIndex(p => p.id == productList.id);
        console.log(prodExistsIndex);
        if (prodExistsIndex >= 0) {
          prod.splice(prodExistsIndex, 1, productList);
        } else if (prodExistsIndex == -1) {
          // console.log("NONExists", prod);
          prod.push(productList);
          // console.log(prod);
        }

        // console.log(prod[0]);

        const input = {
          id: existinglist.id,
          products: prod
        };

        const updatedList = await API.graphql(
          graphqlOperation(updateList, { input })
        );
        // console.log("Existing", updatedList);
      }
    } catch (err) {
      return dispatch({ type: ERROR_LIST, error: err });
    }
  };
};

export const getAllListAWS = () => {
  return async dispatch => {
    try {
      const res = await API.graphql(graphqlOperation(listLists));
      // console.log(res);

      return dispatch({ type: GET_ALL_LIST, lists: res.data.listLists.items });
    } catch (err) {
      return dispatch({ type: ERROR_LIST, error: err });
    }
  };
};

export const setPurchaseComplete = (pID, lists, purchaseState) => {
  return async dispatch => {
    try {
      lists.products.forEach(prod => {
        if (prod.id == pID) {
          console.log("Hello");
          prod.purchaseComplete = purchaseState;
        }
      });

      return dispatch({ type: UPDATE_PURCHASE_COMPLETE, updatedList: lists });
    } catch (err) {
      return dispatch({ type: ERROR_LIST, error: err });
    }
  };
};

export const setCompletedListAWS = (updatedList, allList) => {
  return async dispatch => {
    try {
      // console.log("allList", allList);
      // console.log("updatedList", updatedList);
      // const listIndex = allList.findIndex(list => list.id == updatedList.id);

      // allList.splice(listIndex, 1, updatedList);
      const input = {
        id: updatedList.id,
        completed: true,
        products: updatedList.products
      };

      const List = await API.graphql(graphqlOperation(updateList, { input }));
      console.log(List);
    } catch (err) {
      return dispatch({ type: ERROR_LIST, error: err });
    }
  };
};

export const deleteListAWS = lID => {
  return async dispatch => {
    try {
      const input = {
        id: lID
      };
      console.log(input);

      await API.graphql(graphqlOperation(deleteList, { input }));
    } catch (err) {
      return dispatch({ type: ERROR_LIST, error: err });
    }
  };
};

export const deleteProductFromListAWS = (pID, currentList) => {
  return async dispatch => {
    try {
      const prodIndex = currentList.products.findIndex(prod => prod.id == pID);

      currentList.products.splice(prodIndex, 1);

      const input = {
        id: currentList.id,
        products: currentList.products
      };

      const List = await API.graphql(graphqlOperation(updateList, { input }));
    } catch (err) {
      return dispatch({ type: ERROR_LIST, error: err });
    }
  };
};

export const createListListnerAWS = listCreatedData => {
  return async dispatch => {
    try {
      console.log("ACtion create", listCreatedData);
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};
export const updateListListnerAWS = (listUpdatedData, allList) => {
  return async dispatch => {
    try {
      // console.log("ACtion create", listUpdatedData);
      const listIndex = allList.findIndex(
        list => list.id == listUpdatedData.id
      );
      allList.splice(listIndex, 1, listUpdatedData);
      console.log(allList);
      return dispatch({ type: UPDATE_LIST_LISTENER, updatedList: allList });
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};
export const deleteListListnerAWS = (listUpdatedData, allList) => {
  return async dispatch => {
    try {
      console.log("ACtion create", listUpdatedData);
      const listIndex = allList.findIndex(
        list => list.id == listUpdatedData.id
      );
      allList.splice(listIndex, 1, listUpdatedData);
      console.log(allList);
      return dispatch({ type: UPDATE_LIST_LISTENER, updatedList: allList });
    } catch (err) {
      return dispatch({ type: ERROR_CATEGORY, error: err });
    }
  };
};
