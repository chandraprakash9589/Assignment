import React from 'react'
import ExpenseForm from '../expense-form/ExpenseForm'

export default function EditExpense() {
  return (
    <>
      <div>
        <h2 className='text-center mt-4 mb-3'>Edit Expense</h2>
      </div>
      <ExpenseForm />
    </>
  )
}
