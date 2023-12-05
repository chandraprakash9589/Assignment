import React, { useEffect, useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Signup.css'
import { addUser, fetchUser } from '../../redux/action.jsx/action'
import { useNavigate } from 'react-router-dom'

const userInfo = (state)=> state.user

function Signup() {
  const data = useSelector(userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form,setForm] = useState({
    email : "",
    password : "",
    copassword : ""
  })
  const [errmsg,setErr] = useState({})
  
  useEffect(()=>{
     dispatch(fetchUser())
    },[])
  
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setForm({...form,[name]:value})
  }

  const handleValid = ()=>{
    const {email,password,copassword} = form
    let err = {}
    if(email === ""){
      err.email = "Enter Email"
    }
    
    else{
      err.email = ''
    }
    if(password===""){
      err.pwd = "enter  password"
    }
    else if(password.length<8){
      err.pwd = "enter atleast 8 character"
    }
    else{
      err.pwd = ""
    }
    if(copassword !== password){
      err.copwd = "password not match"
    }
    else{
      err.copwd = ''
    }
    setErr(err)
    let valid = true;
    Object.values(err).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    console.log(valid);
    return valid;
  }
  const handleSubmit =  async (e)=>{
  
   e.preventDefault()
   if(handleValid()){
      setForm({
      email:'',
      password:'',
      copassword:''
     })
     dispatch(addUser(form))
     navigate("/expenselist")
    }
   }
  return (
    <div className='container'>
       <Form className='form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'value={form.email} onChange={handleChange} />
        <Form.Text className='errForm' style={{color:'red'}}>{errmsg.email}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={form.password} onChange={handleChange}/>
        <Form.Text className='errForm'style={{color:'red'}}>{errmsg.pwd}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3"controlId="new-password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='copassword' value={form.copassword} onChange={handleChange}/>
        <Form.Text className='errForm'style={{color:'red'}}>{errmsg.copwd}</Form.Text>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="mt-3 register-btn">
          Already have an account? <Link to="/">login here</Link>
      </div>
    </Form>
      
    </div>
  )
}

export default Signup
