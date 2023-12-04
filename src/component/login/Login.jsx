import React, {useState } from "react";
import { Button,Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../utils/constants";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message,setMessage] = useState("")
  const [success,setSuccess] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data : res} = await axios.get(`${BASE_API_URL}/user?email=${form.email}&password=${form.password}`)
    console.log(res)
    if(res.length>0){
      setMessage("Logged In successfully")
      setSuccess(true)
      setForm({
        email:'',
        password:''
      })

    }
    else{
      setMessage("Invalid email and password")
      setSuccess(false)
    }

  };
  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit}>
      {success? <p style={{color:"green"}}>{message}</p>:<p style={{color:"red"}}>{message}</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className='mt-3 register-btn'>
              Don't have an account? <Link to='/register'>register here</Link>
            </div>
        
      </Form>
    </div>
  );
}

export default Login;
