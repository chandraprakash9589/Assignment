import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../utils/constants";

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    Email: "",
    Password: "",
    isRedirect: false
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const updateInput = (id, value) => {
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data : res} = await axios.get(`${BASE_API_URL}/users?Email=${form.Email}&Password=${form.Password}`)
    console.log(res)

    if(res.length>0){
      setMessage("Login Successful")
      setSuccess(true)
      setForm({
        Email:'',
        Password:'',
        isRedirect:true
      })
    }
    else {
      setMessage("Invalid email or password")
      setSuccess(false)
    }
  }

  useEffect(()=>{
    if(form.isRedirect === true){
      navigate("/expenselist")
    }
  })
  return (
    <>
      <div className="main-content">
        <h2 className="mt-3 text-center">Login</h2>
        <div className="login-section">
          <Form onSubmit={handleSubmit}>
          {success? <p style={{color:"green"}}>{message}</p>:<p style={{color:"red"}}>{message}</p>}
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) => updateInput(e.target.id, e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => updateInput(e.target.id, e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Login</Button>
              <div className="mt-3 register-btn">
                Don't have an account? <Link to="/register">register here</Link>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;