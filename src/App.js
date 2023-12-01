import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import { Routes, Route } from "react-router-dom";
import ShowTodoContainer from "./containers/ShowTodoContainer";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TodoListContainer />} />
        <Route exact path="/Show-Todo" element={<ShowTodoContainer />} />
      </Routes>
    </div>
  );
}

export default App;
