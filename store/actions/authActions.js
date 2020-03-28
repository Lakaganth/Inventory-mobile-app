import { Auth, API, graphqlOperation } from "aws-amplify";
import { createUser } from "./../../src/graphql/mutations";
import { getUser } from "./../../src/graphql/queries";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const GET_USER = "GET_USER";
export const CONFIRM_SIGNUP = "CONFIRM_SIGNUP";
export const RESEND_CODE = "RESEND_CODE";
export const SIGN_OUT = "SIGN_OUT";
export const ERROR = "ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const createNewUser = (id, email, username) => {
  return async dispatch => {
    console.log(id, email, username);
    const userInput = {
      id,
      username,
      email,
      createdAt: new Date()
    };

    const newUser = await API.graphql(
      graphqlOperation(createUser, { input: userInput })
    );
    console.log("newUser", newUser);
    return newUser;
  };
};

export const register = (username, password, email) => {
  return async dispatch => {
    try {
      const input = {
        username,
        email
      };

      const response = await Auth.signUp({
        username: email,
        password,
        attributes: { email }
      });

      console.log("response", response);

      await createNewUser(response.userSub, email, username);

      return dispatch({ type: SIGNUP });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};

export const confirmRegister = (username, code) => {
  return async dispatch => {
    try {
      const response = await Auth.confirmSignUp(username, code, {
        forceAliasCreation: true
      });
      // console.log(response);
      return dispatch({ type: CONFIRM_SIGNUP, user: response });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};
export const resendConfirmCode = username => {
  return async dispatch => {
    try {
      const response = await Auth.resendSignUp(username);
      console.log(response);
      return dispatch({ type: RESEND_CODE, user: response });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};

export const signin = (email, password) => {
  return async dispatch => {
    try {
      const response = await Auth.signIn({
        username: email,
        password
      });
      return dispatch({ type: SIGNIN, user: response });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};

export const getCurrentAuthenticatedUser = () => {
  return async dispatch => {
    try {
      const res = await Auth.currentAuthenticatedUser({ bypassCache: false });
      console.log("res", res.username);

      const id = res.username;

      // const userAWS = await API.graphql(graphqlOperation(getUser, { id }));

      const user = { res };

      return dispatch({ type: GET_USER, user });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};

export const userSignOut = () => {
  return async dispatch => {
    try {
      const res = await Auth.signOut();

      return dispatch({ type: SIGN_OUT });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};

export const resetErrorState = () => {
  return async dispatch => {
    return dispatch({ type: "RESET_ERROR" });
  };
};

export const changePasswordAWS = (oldPassword, newPassword) => {
  return async dispatch => {
    try {
      const res = await Auth.currentAuthenticatedUser();

      const changedPassword = await Auth.changePassword(
        res,
        oldPassword,
        newPassword
      );

      console.log(changedPassword);
      // return dispatch({ type: SIGN_OUT });
    } catch (err) {
      return dispatch({ type: ERROR, error: err.message });
    }
  };
};
