import React, { useState,useEffect } from 'react'
import { Button,Form } from 'react-bootstrap'
import './AddExpense.css'
import { expenseUpdate, fetchExpense } from "../../thunk/index";
import {addExpense} from "../../thunk/index"
import { useDispatch,useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

const expense = (state)=>state.expenseReducer

function Addexpense(props) {
  const [form,setForm] = useState({
    type : "",
    date : '',
    amount : '',
    desc : '' 
  })
  const [editMode,setEditMode] = useState(false)
  const [editIndex,setEditIndex] = useState(null)
  const expenselist = useSelector(expense)
  const dispatch = useDispatch()
  const location = useLocation();
  const updateIndex = location.state;

  
 useEffect(()=>{
  dispatch(fetchExpense())
  
  if (updateIndex !== undefined && updateIndex !== null) {
    handleUpdate(updateIndex.index)
  }
 },[])
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setForm({...form,[name]:value})
  }
  const handleUpdate = (index) => {
    const editData = expenselist.expense[index];
    setForm({
      ...form,
      type: editData?.type,
      date: editData?.date,
      amount : editData?.amount,
      desc : editData?.desc,
      editMode: true,
      editIndex: index,
    });
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(editMode){
      dispatch(expenseUpdate(editIndex,form))
    }
    else{
      dispatch(addExpense(form))
    }
  }
  return (
    <div className='container-box'>
       <Form onSubmit={handleSubmit}>
       <Form.Label>Expense Type</Form.Label>
       <Form.Select aria-label="Default select example"value={form.type} name='type' onChange={handleChange}>
      <option>Cash</option>
      <option>Card</option>
    </Form.Select>

      <Form.Group className="mb-3 Form-group" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control type="date" name='date' value={form.date} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3  Form-group" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense Amount    (In USD)</Form.Label>
        <Form.Control type="text" name='amount' value={form.amount} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3 Form-group" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name='desc' value={form.desc} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Addexpense
