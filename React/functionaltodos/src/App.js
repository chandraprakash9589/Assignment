import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "./components/TodoList.jsx";
import ShowToDoes from "./components/ShowToDoes.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/Add-todo" element={<Todos />} />
        <Route path="/" element={<ShowToDoes />} />
      </Routes>
    </div>
  );
};

export default App;
