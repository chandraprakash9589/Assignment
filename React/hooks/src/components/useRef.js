import React, { useEffect, useRef } from "react";

function AccessingElement() {
  const elementRef = useRef();

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement);
  }, []);
  return (
    <div ref={elementRef}>
      <h1>This is an element...</h1>
    </div>
  );
}

export default AccessingElement;
