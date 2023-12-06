import React from 'react'
import ExpenseForm from '../expense-form/ExpenseForm'
import AddExpenseFormContainer from '../../containers/AddExpenseFormContainer'

export default function AddExpense() {
  // console.log("props:",props)
  return (
    <>
      <div>
        <h2 className='text-center mt-4 mb-3'>Add Expense</h2>
      </div>
      <AddExpenseFormContainer />
    </>
  )
}
