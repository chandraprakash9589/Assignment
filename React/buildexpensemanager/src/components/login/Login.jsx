import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import ExpenseList from '../expense-list/ExpenseList'


export default function Login({ onLoginHandler }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.get("http://localhost:3000/users");
      const user = res.data.find((userData) => userData.email === loginEmail);
      
      if (user && user.password === loginPassword) {
        console.log("Login successful");
        // console.log("user",user)
        setIsLoggedIn(true);
        
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    onLoginHandler();
  };
  useEffect(() => {
    if (isLoggedIn) {
      Navigate("/dashboard", { replace: true });
    }
  }, [isLoggedIn]);
  return (
    <div className='container mt-5'>
      <h2 className='mb-5 text-center'>Login</h2>
      <div className='login-section'>
        <Form onSubmit={handleLogin}>
          <Form.Group className='mb-3' controlId='loginEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              value={loginEmail}
              onChange={(e)=> setLoginEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='loginPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              value={loginPassword}
              onChange={(e)=> setLoginPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button type='submit'>Login</Button>
            <div className='mt-3 register-btn'>
              Don't have an account? <Link to={'/register'}>register here</Link> 
            </div>
          </Form.Group>
        </Form>
        </div>
        {/* {isLogIn?<Navigate to={'./dashboard'}></Navigate>:null} */}
    </div>
  )
}
