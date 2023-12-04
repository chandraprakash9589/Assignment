import './App.css';
import { Route,Routes } from 'react-router-dom'
import Signup from './component/register.jsx/Signup';
import Login from './component/login/Login';
import AddExpense from './component/expense-form/AddExpense';
import Layout from './component/Layout';
import Sidebar from './component/sidebar/Sidebar';
function App() {
  return (
    <div className='App'>
      <Layout/>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/add' element={<AddExpense/>}/>

        <Route path='/sidebar' element={<Sidebar/>}/>
      </Routes>
    </div>
  );
}

export default App;
