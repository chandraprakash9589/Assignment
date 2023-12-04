import { legacy_createStore } from "redux";
import rootReducer from "./redux/reducers";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;