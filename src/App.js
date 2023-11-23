import './App.css';
import TodoForm from './components/TodoForm';
import { Routes, Route } from 'react-router-dom';
import ShowTasks from './components/ShowTasks';

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
