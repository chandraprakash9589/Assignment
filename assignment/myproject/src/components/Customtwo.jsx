import React, { useState } from 'react'
import useCustomHooks from './CustomHooks'
function Customtwo() {
  const [count,setCount] = useState(0)
  useCustomHooks(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default Customtwo
