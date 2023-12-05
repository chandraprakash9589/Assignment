import './App.css';
import ExpenseForm from './components/expense-form/ExpenseForm';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import SearchExpenses from './components/search-expense/SearchExpenses';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Profile/>
      <ExpenseForm />
      <SearchExpenses/>
      {/* <Register /> */}
    </div>
  );
}

export default App;
