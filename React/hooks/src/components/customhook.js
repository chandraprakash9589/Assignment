import React, {useState} from 'react'

const useCounter = ()=>{
  const [counter, setCounter] = useState(0);
  return {
    counter,
    increment: ()=> setCounter(counter + 1),
    decrement: ()=> setCounter(counter - 1)
  };
};

// function MyComponents(){
//   const {counter, increment, decrement} = useCounter();

//   return(
//     <div>
//       <span onClick={decrement}>-</span>
//       <span>{counter}</span>
//       <span onClick={increment}>+</span>
//     </div>
//   );
// }

export default useCounter;
