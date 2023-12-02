import { combineReducers } from "redux";
import todoReducer from "./reducer";

const rootreducer = combineReducers({
  todos : todoReducer
})

export default rootreducer
