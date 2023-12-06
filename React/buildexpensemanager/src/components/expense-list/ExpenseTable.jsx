import React, { useState } from 'react'
import {Button, Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function ExpenseTable(props) {
  const {removeExpenseHandler} = props;
  // console.log("Expense Table:",props)
  const counter = useSelector((state)=>state.expenseReducer)
  // console.log("counter:",counter)
  const [expenses, setExpenses] = useState([])

   axios.get("http://localhost:3000/expenses")
      .then((response)=>{
        // console.log("response:",response)
        setExpenses(response.data)
      })
      .catch((error)=>{
        console.log("error:",error)
      })

  return (  
    <div>
      <Table striped bordered hover variant="light text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Expense Type</th>
          <th>Expense Date</th>
          <th>Expense Amount</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      { expenses.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.expenseType}</td>
                  <td>{item.expenseDate}</td>
                  <td>{item.expenseAmount}</td>
                  <td>{item.expenseDes}</td>
                  <td><Button variant='info' size='sm'>Edit</Button></td>
                  <td><Button variant='danger' onClick={()=>removeExpenseHandler(index)} size='sm'>Delete</Button></td>
                  
                </tr>
              ))}
      </tbody>
    </Table>
    </div>
  )
}
