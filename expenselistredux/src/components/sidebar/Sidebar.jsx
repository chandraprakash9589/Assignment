import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <div className="container">
      <ul>
      <li className='list-item'>
        <NavLink to='/expenselist'>
        <div>Dashboard</div>
        </NavLink>
      </li>
      <li className='list-item'>
          <div>Add Expense</div>
      </li>
      <li className='list-item'>
          <div>Search Expense</div>
      </li>
      <li className='list-item'>
          <div>Profile</div>
      </li>
      <li className='list-item'>
          <div>Logout</div>
      </li>
    </ul>
    </div>
  )
}

export default Sidebar