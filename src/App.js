import './App.css';
import { Route,Routes } from 'react-router-dom'
import Signup from './component/register.jsx/Signup';
import Login from './component/login/Login';
import Addexpense from './component/expense-form/AddExpense'
import Sidebar from './component/sidebar/Sidebar';
import Expensetable from './component/expense-list/Expensetable';
import SearchExpense from './component/search-expense/SearchExpense';
function App() {
  return (
    <div className='App'>
      <Sidebar>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/expenselist' element={<Expensetable/>}/>
        <Route path='/add' element={<Addexpense/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/search' element={<SearchExpense/>}/>

      </Routes>
    </Sidebar>
    </div>
  );
}

export default App;
