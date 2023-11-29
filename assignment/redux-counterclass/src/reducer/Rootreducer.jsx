import { combineReducers } from "redux";
import countReducer from './reducer'
const rootReducer = combineReducers({
  value : countReducer
})
export default rootReducer;