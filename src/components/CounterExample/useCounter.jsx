import { useState, useEffect } from "react";

const useCounter = (initial, componentName) => {
  const [counter, setCounter] = useState(initial);

  const resetCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("The Button of the "+componentName+ " is clicked " +counter+ " times.");
  }, [counter, componentName]);
  return resetCounter;
};

export default useCounter;
