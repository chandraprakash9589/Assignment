import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions";

const Counter = () => {
  const count = useSelector((count) => count.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div>
          <button
            className="btn btn-primary mx-2"
            title="Decrement"
            onClick={() => dispatch(decNumber(5))}
          >
            -
          </button>
          Counter: ({count})
          <button
            className="btn btn-primary mx-2"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
