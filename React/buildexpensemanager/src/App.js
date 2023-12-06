import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import LoginContainer from './containers/LoginContainer';
import AddExpenseContainer from './containers/AddExpenseContainer';
import EditExpense from './components/edit-expense/EditExpense';
import SearchExpense from './components/search-expense/SearchExpense';
import ExpenseList from './components/expense-list/ExpenseList';
import RegisterContainer from './containers/RegisterContainer';
import Profile from './components/profile/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginContainer />} />
        <Route exact path="/register" element={<RegisterContainer />}  />
        
          <>
            <Route exact path="/dashboard" element={<Sidebar><ExpenseList/></Sidebar>} />
              <Route path="/add-expense" element={<Sidebar><AddExpenseContainer /></Sidebar>} />
              <Route path="/profile" element={<Sidebar><Profile /></Sidebar>} />
              <Route path="/search-expense" element={<Sidebar><SearchExpense /></Sidebar>} />
          </>
    
      </Routes>
    </Router>
  );
}

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <ExpenseList />
    </>
  );
};

export default App;
