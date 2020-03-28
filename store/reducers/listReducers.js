import {
  GET_ALL_LIST,
  ERROR_LIST,
  RESET_ERROR_LIST,
  UPDATE_PURCHASE_COMPLETE,
  UPDATE_LIST_LISTENER,
  UPDATE_LIST,
  DELETE_LIST_LISTENER,
  CREATE_LIST_LISTENER,
  NEW_LIST
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
    case NEW_LIST:
      const newListAdd = [...state.lists];
      newListAdd.push(action.newList);
      return { ...state, lists: newListAdd };
    case UPDATE_LIST:
      const modifiedLists = [...state.lists];
      const listIndex = modifiedLists.findIndex(
        list => list.id == action.list.id
      );
      modifiedLists.splice(listIndex, 1, action.list);
      return { ...state, lists: modifiedLists };
    case UPDATE_PURCHASE_COMPLETE:
      return { ...state, updatedList: action.updatedList };
    // case CREATE_LIST_LISTENER:
    //   // const newListAdd = [...state.lists];
    //   // newListAdd
    //   // console.log("VSVDVDV", newListAdd);
    //   return { ...state, lists: action.updatedList };
    case UPDATE_LIST_LISTENER:
      return { ...state, lists: action.updatedList };
    case DELETE_LIST_LISTENER:
      return { ...state, lists: action.updatedList };
    case ERROR_LIST:
      return { ...state, error: action.error };
    case RESET_ERROR_LIST:
      return { ...state, error: "" };
    default:
      return state;
  }
};
