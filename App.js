import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import RootNavigator from "./src/navigators/RootNavigator";
import authReducers from "./store/reducers/authReducers";
import categoryReducers from "./store/reducers/categoryReducers";

import { Provider, useDispatch } from "react-redux";
import { YellowBox } from "react-native";
import _ from "lodash";
import listReducers from "./store/reducers/listReducers";
import productReducers from "./store/reducers/productReducers";

Amplify.configure(awsmobile);

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

const rootReducer = combineReducers({
  auth: authReducers,
  categories: categoryReducers,
  list: listReducers,
  product: productReducers
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
