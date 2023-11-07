import useCounter from './customhook' 
// import {useState} from 'react'
function Counter02(){
  const {counter, increment, decrement} = useCounter();

  return(
    <div>
      <span onClick={decrement}>-</span>
      <span>{counter}</span>
      <span onClick={increment}>+</span>
    </div>
  );
}

export default Counter02;
