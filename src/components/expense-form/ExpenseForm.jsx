import React from "react";
import { Button, Form } from 'react-bootstrap';

const ExpenseForm = () => {
  return (
    <>
    <h2 className='my-3 text-center'>Add Expense</h2>
    <Form>
      <Form.Group className="mb-3" controlId="expense_type">
        <Form.Label>Expense Type</Form.Label>
        <Form.Select aria-label="Expense Type">
          <option value="">Select Expense Type</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="expense_date">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="expense_amount">
        <Form.Label>Expense Amount (In USD)</Form.Label>
        <Form.Control type="text" placeholder="Enter amount" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter description" />
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
