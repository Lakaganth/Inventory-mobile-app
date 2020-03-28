import {
  GET_SINGLE_PRODUCT,
  CLEAR_SINGLE_PRODUCT,
  ERROR_LIST,
  RESET_ERROR_LIST
} from "../actions/productActions";

const initialState = {
  scannedProduct: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return { ...state, scannedProduct: action.product };
    case CLEAR_SINGLE_PRODUCT:
      return { ...state, scannedProduct: "" };
    case ERROR_LIST:
      return { ...state, error: action.error };
    case RESET_ERROR_LIST:
      return { ...state, error: "" };
    default:
      return state;
  }
};
