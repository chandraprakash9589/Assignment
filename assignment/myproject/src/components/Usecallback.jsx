import React, { useState } from 'react'
import Todo from './Todo'
function Usecallback() {
  const [count,setCount] = useState(0)
  const [todo,setTodo] = useState([])
 const handleClick = ()=>{
   setCount(count+1)
   console.log("count")
 }
 const Addtodo = ()=>{
   setTodo((data)=>([...data,"next todo"]))
   console.log(todo)
   console.log("run")
 }
  return (
    <div>
      <Todo todo={todo} Addtodo={Addtodo}/>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default Usecallback
