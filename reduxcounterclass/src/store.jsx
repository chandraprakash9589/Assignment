import { legacy_createStore } from "redux";
import changeNumber from "./reducers/upDown";

const store = legacy_createStore(changeNumber)

export default store;