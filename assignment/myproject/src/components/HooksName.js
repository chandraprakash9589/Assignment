import React, { useState } from "react";

function Show(){
    const [name,setName] = useState({fname:'',lname:''})
    return(
        <>
        <input type="text"value={name.fname} onChange={(event)=>setName({...name,fname : event.target.value})}/>
        <input type="text"value={name.lname} onChange={(event)=> setName({...name,lname : event.target.value})}/>
        <p>{name.fname} {name.lname}</p>

        </>
    )
}
export default Show