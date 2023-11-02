import axios from "axios";
import React, { useEffect, useState } from "react";

function Singledata(){
    const [data,setData] = useState({})
    const [id,setId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts${id}`)
        .then((res)=>{
          console.log(res)
        })
    })
    return(
        <>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
        <p>{data.title}</p>
        </>
    )
}
export default Singledata