import './App.css';
import ExpenseList from './components/expense-list/ExpenseList';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import SearchExpenses from './components/search-expense/SearchExpenses';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import ExpenseAdd from './components/expense-add/ExpenseAdd';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/expenselist' element={<ExpenseList/>}></Route>
        <Route path='/search' element={<SearchExpenses />}></Route>
        <Route path='add' element={<ExpenseAdd />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
