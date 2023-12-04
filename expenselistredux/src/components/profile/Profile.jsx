import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from 'react-bootstrap';

const Profile = () => {
  return (
    <div className='main-content'>
       <h2 className='my-3 text-center'>Profile</h2>
      <Form>
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your first name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='last_name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your last name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
          />
        </Form.Group>
        <Form.Group>
          <Button type='submit' variant='success'>
            Update Profile
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Profile