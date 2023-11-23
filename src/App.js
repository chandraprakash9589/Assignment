import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgressBar from './components/CircularProgressBar';
import "bootstrap/dist/css/bootstrap.css";

const Todos = React.lazy(() => delayForDemo(import("./components/TodoForm")));
const Showtodo = React.lazy(() => delayForDemo(import("./components/ShowTasks")));

async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div><CircularProgressBar/></div>}>
              <Todos />
            </Suspense>
          }
        ></Route>
        <Route
          path="/showtasks"
          element={
            <Suspense fallback={<div><CircularProgressBar/></div>}>
              <Showtodo />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
