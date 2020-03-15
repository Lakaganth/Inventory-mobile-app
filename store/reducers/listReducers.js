import {
  GET_ALL_LIST,
  ERROR_LIST,
  RESET_ERROR_LIST,
  UPDATE_PURCHASE_COMPLETE,
  UPDATE_LIST_LISTENER
} from "../actions/listActions";

const initialState = {
  lists: [],
  updatedList: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LIST:
      return { ...state, lists: action.lists };
    case UPDATE_PURCHASE_COMPLETE:
      return { ...state, updatedList: action.updatedList };
    case UPDATE_LIST_LISTENER:
      return { ...state, lists: action.updatedList };
    case ERROR_LIST:
      return { ...state, error: action.error };
    case RESET_ERROR_LIST:
      return { ...state, error: "" };
    default:
      return state;
  }
};
