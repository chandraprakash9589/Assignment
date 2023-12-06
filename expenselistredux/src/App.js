import './App.css';
import ExpenseForm from './components/expense-form/ExpenseForm';
import ExpenseList from './components/expense-list/ExpenseList';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import SearchExpenses from './components/search-expense/SearchExpenses';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/expenselist' element={<ExpenseList/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
