import {
  SIGNIN,
  GET_USER,
  SIGNUP,
  CONFIRM_SIGNUP,
  SIGN_OUT,
  ERROR,
  RESET_ERROR
} from "./../actions/authActions";

const initialState = {
  user: "",
  currentUser: "",
  userSuccess: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, userSuccess: true };
    case SIGNUP:
      return { ...state };
    case CONFIRM_SIGNUP:
      return { ...state };
    case SIGN_OUT:
      return { ...state, user: "", userSuccess: false };
    case GET_USER:
      return {
        ...state,
        user: action.user.res,
        currentUser: action.user.userAWS
      };
    case ERROR:
      return { ...state, error: action.error };
    case RESET_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
