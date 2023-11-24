import "./App.css";
import React from "react";
// import Home from "./components/Home";
// import ComponentFirst from "./components/CounterExample/ComponentFirst";
// import ComponentSecond from "./components/CounterExample/ComponentSecond";
import { useState, useTransition } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("Hello Geek");
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setIsVisible(!isVisible);
    startTransition(() => {});
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn" onClick={handleClick}>
          Toggle Visibility
        </button>
        <button
          className="btn"
          onClick={() => setText("Welcome to geeksforgeeks")}
        >
          Change Text
        </button>
      </div>

      <div style={isPending ? { opacity: 0 } : { opacity: isVisible ? 1 : 0 }}>
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default App;
