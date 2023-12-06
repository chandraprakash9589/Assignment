import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="container">
      <ul>
      <li className='list-item'>
        <Link to='/expenselist'>
        <div>Dashboard</div>
        </Link>
      </li>
      <li className='list-item'>
        <Link to='/add'>
        <div>Add Expense</div>
        </Link>
      </li>
      <Link to='/search'>
      <li className='list-item'>
          <div>Search Expense</div>
      </li>
      </Link>
      <Link to='profile'>
      <li className='list-item'>
          <div>Profile</div>
      </li>
      </Link>
      <Link to='/'>
      <li className='list-item'>
          <div>Logout</div>
      </li>
      </Link>
    </ul>
    </div>
  )
}

export default Sidebar