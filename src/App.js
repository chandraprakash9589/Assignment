import React, {lazy, Suspense} from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { Route, Routes } from "react-router-dom";
const Todos = lazy(()=> {
  return new Promise(resolve =>{
    setTimeout(()=>resolve(import("./components/TodoList.jsx")),1000);
  });
});
const ShowToDoes = lazy(()=> {
  return new Promise(resolve =>{
    setTimeout(()=>resolve(import("./components/ShowToDoes.jsx")),1000);
  });
});

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/Add-todo" element={
          <Suspense fallback={<LoadingScreen/>}>
            <Todos />
          </Suspense>
        } />
        <Route path="/" element={
          <Suspense fallback={<LoadingScreen/>}>
            <ShowToDoes />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default App;
