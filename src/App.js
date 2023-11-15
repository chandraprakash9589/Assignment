import './App.css';
import ShowTasks from './components/ShowTasks';
import TodoForm from './components/TodoForm';
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TodoForm />}></Route>
        <Route path='/showtasks' element= {<ShowTasks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
