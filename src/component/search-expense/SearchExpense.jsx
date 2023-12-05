import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Expensetable from '../expense-list/Expensetable'
import './search.css'
import { useSelector } from 'react-redux'
import {expenseSearch,expenseSearchType,expenseSearchYear} from "../../redux/action.jsx/action";

const login = (state)=>state.expenseReducer

function SearchExpense() {
  const select  = useSelector(login)
  const dispatch = useDispatch()
  const [searchTerm,setSearchTerm] = useState("")
  const [searchType] = useState("")
  const [searchYear] = useState()

  const handleSubmit = (e)=>{
   e.preventDefault()
   dispatch(expenseSearch(searchTerm))
   setSearchTerm("")
  }
 
  return (
    <div>
      <div className='search-expenses'>
        <h2 className='my-3 text-center'>Search Expenses</h2>
        <div className='search-box'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='search-input'>
              <Form.Control
                type='search'
                placeholder='Enter description to search and press enter key'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
              />
              <>{searchTerm}</>
            </Form.Group>
          </Form>
        </div>
        <div className='filters'>
          <div className='expense-type-filter'>
            <Form.Label>Expense Type</Form.Label>
            <Form.Select
              aria-label='Select Expense Type'
              value={searchType}
              onChange={(e)=>{ 
                dispatch(expenseSearchType(e.target.value))
              }}
            >
              <option value=''>Select Expense Type</option>
              <option value='card'>Card</option>
              <option value='cash'>Cash</option>
            </Form.Select>
          </div>
          
          <div className='date-filter'>
            <Form.Label>Expense Year</Form.Label>
            <Form.Select
              aria-label='Select Year'
              value={searchYear}
              onChange={(e)=>{ 
                dispatch(expenseSearchYear(e.target.value))
              }}
            >
              <option value=''>Select Year</option>
              <option value='current_year'>Current Year</option>
              <option value='previous_year'>Previous Year</option>
            </Form.Select>
          </div>
          <div className='sort-filter'>
            <Form.Label>Sort By</Form.Label>
            <Form.Select
              aria-label='Select Sort By' 
            >
              <option value=''>Select Sort By</option>
              <option value='desc'>Oldest First</option>
              <option value='asc'>Newest First</option>
            </Form.Select>
          </div>
        </div>
      </div>
        <p className='error-msg' style={{ textAlign: 'center' }}>
        </p>
      
          <Expensetable />
      
       
    </div>
  )
}

export default SearchExpense
