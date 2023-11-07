
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10)
  let addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }
  let removeValue = () => {
    if(counter > 0){
      setCounter(counter -1)
    }
  }
  return (
    <>
      <div className="App">
        <h1>Counter between 0 to 20</h1>
        <h2>Value : {counter}</h2>
        <button onClick={addValue}>Add Value</button><br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

// -----------------------------------------------------------------------

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter />);

//---------------------------------------------------------------------------------- 

// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Jay prakash gupta");

//   return (
//     <>
//      <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//      </UserContext.Provider>
//     </>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);

// ------------------------------------------------------------------------------ 

export default App;
