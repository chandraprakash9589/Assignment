import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import './Register.css'

export default function Register({onSubmitHandler}) {
  // const {onSubmitHandler} = props;
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    const cpassword = e.target.cpassword.value
    onSubmitHandler({email,password,cpassword})
    setEmail("");
    setPassword("");
    setCPassword("");
    
  }
  

  return (
    <div className='container'>
      <h2 className='mt-5 mb-5 text-center'>Register</h2>
      <div className='register-section'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={email}
              placeholder='Enter your email'
              onChange={(event)=>setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              placeholder='Enter your password'
              onChange={(event)=>setPassword(event.target.value)}

            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='cpassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              value={cpassword}
              placeholder='Enter confirm password'
              onChange={(event)=>setCPassword(event.target.value)}

            />
          </Form.Group>
          <Form.Group>
            <Button type='submit'>Register</Button>
            <div className='mt-3 register-btn'>
              Already have an account? <Link to='/'>login here</Link>
            </div>
          </Form.Group>
        </Form>
        </div>
      </div>
  )
}
