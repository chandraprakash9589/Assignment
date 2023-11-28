import { combineReducers } from "redux";
import counterReducer from "./features/reducer";
const rootReducer = combineReducers({
  value : counterReducer
})

export default rootReducer