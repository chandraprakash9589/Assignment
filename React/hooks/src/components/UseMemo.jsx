import React from "react";
import { useMemo } from "react";
import { useState } from "react";
export default function UseMemo() {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(100);

  const multiplication = useMemo(() => {
    console.log("function called...");
    return increase * 10;
  }, [increase]);

  return (
    <div>
      {multiplication} <br />
      multiplication <br />
      {increase}
      <br />
      <button onClick={() => setIncrease(increase + 1)}>Add</button>
      <br />
      {decrease} <br />
      <button onClick={() => setDecrease(decrease - 1)}>Sub</button>
    </div>
  );
}
