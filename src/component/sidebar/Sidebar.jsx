import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='side-box'>
      <ul>
        <Link to="/">
        <li className='listItem'>DashBoard</li>
        </Link>
        <Link to="add">
        <li className='listItem'>Add Expense</li>
        </Link>
        <Link to="/search">
        <li className='listItem'>Search Expense</li>
        </Link>
        <Link to="logout">
        <li className='listItem'>Logout</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
