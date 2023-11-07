import React, {useState } from 'react';

function StateFromFn(){

  const [token] = useState(()=>{
    let token = window.localStorage.getItem("my-token");
    return token || "DemoToken"
  });
  return <div>Token is {token}</div>
};

export default StateFromFn;