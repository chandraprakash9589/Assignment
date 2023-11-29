import { legacy_createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

function configureStore(state = { rotating: true }) {
  return legacy_createStore(rotateReducer, state);
}

export default configureStore;
