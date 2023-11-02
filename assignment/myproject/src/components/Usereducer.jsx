import React, { Component } from "react";
import { useReducer } from "react";
const inistate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return inistate;
    case "default":
      return state;
  }
};
export function Usereducer() {
  const [count, dispatch] = useReducer(reducer, inistate);
  return (
    <div>
      <>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </>
    </div>
  );
}

export default Usereducer;
