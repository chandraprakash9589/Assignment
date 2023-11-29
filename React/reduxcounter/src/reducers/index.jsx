
import counterReducer from "./combine";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer