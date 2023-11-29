import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement } from "./actions/index";

const App = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    </>
  );
};

export default App;
