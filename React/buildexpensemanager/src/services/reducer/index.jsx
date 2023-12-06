import userReducer from "./userReducer";
import expenseReducer from './addExpenseReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  expenseReducer,
});

export default rootReducer;
