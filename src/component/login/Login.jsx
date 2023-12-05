import React, {useState,useEffect } from "react";
import { Button,Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginRequest,fetchUser } from "../../redux/action.jsx/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const logsuccess = (state) =>state.user.loginSucces
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const success = useSelector(logsuccess)
  console.log(success)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchUser())
   },[])
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch( LoginRequest(form))
    navigate("/expenselist")
   
  };
  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit}>
      {success && <p style={{color:"green"}}>Logged In successfully</p>}
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
