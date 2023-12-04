import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import './AddExpense.css'
function AddExpense() {
  const [Form,setForm] = useState({
  })
  return (
    <div className='container'>
       <Form>
       <Form.Label>Expense Type</Form.Label>
       <Form.Select aria-label="Default select example">
      <option value="1">Cash</option>
      <option value="2">Card</option>
    </Form.Select>

      <Form.Group className="mb-3 Form-group" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>

      <Form.Group className="mb-3  Form-group" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense Amount    (In USD)</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3 Form-group" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddExpense
