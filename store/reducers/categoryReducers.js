import {
  ERROR_CATEGORY,
  RESET_ERROR_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCTS_FROM_CATEGORY,
  REMOVE_FETCHED_PRODUCTS_FROM_CATEGORY
} from "./../actions/categoryActions";

const initialState = {
  categories: [],
  productsFromCategories: [],
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.categories };
    case GET_PRODUCTS_FROM_CATEGORY:
      return {
        ...state,
        productsFromCategories: action.productsFromCategories
      };
    case REMOVE_FETCHED_PRODUCTS_FROM_CATEGORY:
      return {
        ...state,
        productsFromCategories: []
      };
    case ERROR_CATEGORY:
      return { ...state, error: action.error };
    case RESET_ERROR_CATEGORY:
      return { ...state, error: "" };
    default:
      return state;
  }
};
