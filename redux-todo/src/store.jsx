import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import rootreducer from "./reducer/rootReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(rootreducer,applyMiddleware(thunk))

export default store
