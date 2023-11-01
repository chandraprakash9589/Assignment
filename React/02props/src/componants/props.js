import React from "react";

function PropsFunc(props) {
    return (
        <>
            <div className="App-header">
                <h1>Hello {props.name}, Welcome to {props.tech} Js. Now we learn about Props.</h1>
                <h2>Note that the {props.tech} development build is not optimized.</h2>
            </div>
        </>
    );
}

export default PropsFunc;