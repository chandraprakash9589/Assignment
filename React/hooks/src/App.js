import logo from "./logo.svg";
import "./App.css";
import AccessingElement from "./components/useRef";
import MyComponents from "./components/customhook";
import StateFromFn from "./components/stateFromFn";
import MyComponents01 from "./components/counterIncrement";
import Counter02 from "./components/counter02";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseCallback /> */}
        {/* <UseMemo/> */}
        <AccessingElement/>
        {/* <MyComponents/> */}
        {/* <MyComponents01/>
      <Counter02 /> */}
        {/* <StateFromFn/> */}
      </header>
    </div>
  );
}

export default App;
