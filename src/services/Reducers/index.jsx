import todoReducers from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;
