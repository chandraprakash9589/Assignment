import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ExpenseForm = () => {
  const [expenseType, setExpenseType] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setexpenseAmount] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    expenseTypeError:"",
    expenseDateError:"",
    expenseAmountError:"",
    description:""
  });

  const handleExpenseSubmit =(e)=>{
    e.preventDefault()
    // addExpenseData({expenseType, expenseDate, expenseAmount, description})
    
  }
  return (
    <>
      <h2 className="my-3 text-center">Add Expense</h2>
      <Form onSubmit={handleExpenseSubmit}>
        <Form.Group className="mb-3" controlId="expense_type">
          <Form.Label>Expense Type</Form.Label>
          <Form.Select
            aria-label="Expense Type"
            value={expenseType}
            onChange={(e) => setExpenseType(e.target.value)}
          >
            <option value="">Select Expense Type</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="expense_date">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control 
          type="date"
          value={expenseDate} 
          onChange={(e)=>setExpenseDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="expense_amount">
          <Form.Label>Expense Amount (In USD)</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter amount"
          value={expenseAmount}
          onChange={(e)=>setexpenseAmount(e.target.value)} 
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="success">
            Expense
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default ExpenseForm;
