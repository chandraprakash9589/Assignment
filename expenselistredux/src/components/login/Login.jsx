import React from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="main-content">
        <h2 className="mt-3 text-center">Login</h2>
        <div className="login-section">
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Login</Button>
              <div className="mt-3 register-btn">
                Don't have an account? <Link to='/register'>register here</Link>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
