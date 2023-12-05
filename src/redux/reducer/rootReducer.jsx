import { userReducer } from "./reducer";
import { expenseReducer } from "./expenseReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user : userReducer,
  expenseReducer
})