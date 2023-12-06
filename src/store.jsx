import {thunk} from "redux-thunk"
import { legacy_createStore ,applyMiddleware} from "redux";
import rootReducer from "./services/Reducers";

const store = legacy_createStore(
  rootReducer, applyMiddleware(thunk));


export default store;