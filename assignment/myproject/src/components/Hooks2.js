import React, { useEffect } from "react";
import { useState } from "react";

function Count(){
    const [count,setCount] = useState(0)
    const [name,setName ] = useState('')

    useEffect(()=>{
        console.log("useeffect")
        document.title = `you clicked ${count} times`
    },[])
    return (
        <>
        <h1>{count}</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>click</button>
        </>
    )
}
export default Count