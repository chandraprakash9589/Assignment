import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer: usersReducer
})

export default rootReducer;