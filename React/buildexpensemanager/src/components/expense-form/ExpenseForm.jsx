import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ExpenseForm({onExpenseSubmitHandler}) {
  // console.log("Expense Form:",props)
  
  const [expenseType, setExpenseType] = useState("")
  const [expenseDate, setExpenseDate] = useState("")
  const [expenseAmount, setExpenseAmount] = useState("")
  const [expenseDes, setExpenseDes] = useState("")

  const handleExpense = (e)=> {
    e.preventDefault();
    onExpenseSubmitHandler({expenseType,expenseDate,expenseAmount,expenseDes})
  }
  return (
    <div>
    <div className='container'>
      <div>
        <Form onSubmit={handleExpense}>
      <Form.Group className='mb-3' controlId='expense_type'>

        <Form.Label>Expense Type</Form.Label>
        <Form.Select aria-label="Default select example" value={expenseType} onChange={(e)=>setExpenseType(e.target.value)}>
      <option >Select Expense Type </option>
      <option value="cash">Cash</option>
      <option value="card">Card</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className='mb-3' controlId='expense_date'>
        <Form.Label>Expense Date</Form.Label>
        <Form.Control
          type='date'
          value={expenseDate}
          onChange={(e)=>setExpenseDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='expense_amount'>
        <Form.Label>Expense Amount (In USD)</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter amount'
          value={expenseAmount}
          onChange={(e)=> setExpenseAmount(e.target.value)}
          />
      </Form.Group>
      <Form.Group className='mb-3' controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Enter description' 
          value={expenseDes}
          onChange={(e)=> setExpenseDes(e.target.value)}
          />
      </Form.Group>
      <Form.Group>
        <Button type='submit' variant='success'>
          Add Expense
        </Button>
      </Form.Group>
        </Form>
      </div>
    </div>
  </div>
  )
}
