import React, { useState } from 'react'
import {Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Register.css'
import { registerUser } from '../../redux/actions';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/constants';

const Register = () => {
  const dispatch = useDispatch()
  const [registerForm, setRegisterForm] = useState({
    Email:"",
    Password:"",
    confirmPassword:""
  })

  const updateInput = (id, value) => {
    setRegisterForm((prevForm) => ({ ...prevForm, [id]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const Email = registerForm.Email
    const Password = registerForm.Password
    console.log(Email, "I am email from submit");
    axios.post(`${BASE_API_URL}/users`,{Email,Password}).then((response)=>{
      console.log(response);
    })

    dispatch(registerUser(registerForm))
  }
  return (
    <div className='main-content'>
    <h2 className='mt-3 text-center'>Register</h2>
    <div className='register-section'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='Email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            onChange={(e) => updateInput(e.target.id, e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='Password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            onChange={(e) => updateInput(e.target.id, e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter confirm password'
            onChange={(e) => updateInput(e.target.id, e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button type='submit'>Register</Button>
          <div className='mt-3 register-btn'>
            Already have an account? <Link to='/login'>login here</Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  </div>
  )
}

export default Register