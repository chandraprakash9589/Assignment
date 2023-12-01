import TodoForm from "./components/TodoForm";
import { Routes, Route } from "react-router-dom";
import ShowTodos from "./components/ShowTodos";

const App = () => {
  // const [editFormShow, setEditFormShow] = useState(false);

  // const handleEditClick=()=>{
  //   setEditFormShow(true);
  // }

  // const handleCloseEditModal = () => {
  //     setEditFormShow(false);
  // };
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoForm/>}></Route>
        <Route path="/showtodos" element={<ShowTodos/>}></Route>
      </Routes>
    </>
  );
};

export default App;
