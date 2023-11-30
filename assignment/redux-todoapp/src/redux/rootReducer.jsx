import { combineReducers } from "redux";
import todoReducer from "./reducer";

const rootReducer = combineReducers({
  todos : todoReducer
})
export default rootReducer