import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducer from "./reducer/Rootreducer";
const loggermiddleware = (store) => (next) => (action) => {
  action.payload = 3;
  setTimeout(() => {
    next(action);
  }, 1000);
};
const middleware = applyMiddleware(loggermiddleware);
const store = legacy_createStore(rootReducer, middleware);

export default store;
