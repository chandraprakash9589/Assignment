import React, { useReducer, useState } from 'react'
const inistate = 0;
const reducer  = (state,action)=>{
  switch(action){
    case "increment":
      return state+1
    case "decrement":
      return state-1
    case "reset":
      return inistate
    case "default":
      return state


  }
}
function Multiplereducer() {
  const [count,dispatch] = useReducer(reducer,inistate)
  const [counttwo,dispatched] = useReducer(reducer,inistate)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      
        <h1>{counttwo}</h1>
        <button onClick={() => dispatched("increment")}>Increment</button>
        <button onClick={() => dispatched("decrement")}>decrement</button>
        <button onClick={() => dispatched("reset")}>reset</button>
    </div>
  )
}

export default Multiplereducer
