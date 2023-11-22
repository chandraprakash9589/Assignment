// What is the purpose of the useCallback hook?
// useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed. Memoization is a way to cache a result so that it doesn't need to be computed again. This can boost performance.

import React, { useState } from "react";
import ChildCallback from "./ChildCallback";
import { useCallback } from "react";

export default function UseCallback() {
  const [add, setAdd] = useState(0);
  const [name, setName] = useState("jay prakash");

  const Loading = useCallback(() => {
    console.log("Loading function called...");
  }, [name]);

  return (
    <>
      {add}
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <br />
      {name} <br />
      <button onClick={() => setName("yogesh kumar")}>change name</button>
      <ChildCallback onLoad={Loading} />
    </>
  );
}
