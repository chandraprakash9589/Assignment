import React from 'react'
import ExpenseTable from './ExpenseTable'

export default function ExpenseList() {
  return (
    <div className='container'>
      <h2 className='mt-4 mb-4 text-center'>Expense List</h2>
      <ExpenseTable />
    </div>
  )
}
