import logo from "./logo.svg";
import "./App.css";
import Basic from "./components/Basic";
import Error from "./components/Error";
import Context from "./components/Context";
import CreateContext from "./components/CreateContext";
import Snapshot from "./components/Snapshot";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./components/About";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <>
    {/* <ErrorBoundary>
    <About/>
    </ErrorBoundary> */}
    <Snapshot/>
      <Basic name="abc" email="x@gmail.com"/>
     <Routes>
      <Route path="error/" element={<Error/>}/>
      <Route path="about/" element={<About/>}/>

     </Routes>
     </>
  );
}

export default App;
