import React from 'react';
import MyEventFCmodule from "./MyEventFC.module.css";

function MyEvent(){

    function clickEvent(){
        alert("Handle Event in Functional Component...")
    };

    function mouseOverEvent(){
        alert("Mouse Over Event Invoked...")
    }
    return(
        <>
            <h1 className={MyEventFCmodule.heading} onMouseOver={mouseOverEvent}>Events in React JS...</h1>
            <button style={{background: 'red', color:'white', padding :"10px 20px", borderRadius :"10px"}} onClick={clickEvent}>click function component</button>
        </>
    );
}

export default MyEvent;