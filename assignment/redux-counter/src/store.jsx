import { legacy_createStore } from "redux";
import rootReducer from "./rootreducer";

const store = legacy_createStore(rootReducer)

export default store
