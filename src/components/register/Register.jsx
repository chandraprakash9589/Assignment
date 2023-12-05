import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Register.css";
import { registerUser } from "../../redux/actions";

const Register = () => {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    Email: "",
    Password: "",
    confirmPassword: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const updateInput = (id, value) => {
    setRegisterForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const validation = () => {
    const { Email, Password, confirmPassword } = registerForm;
    let hasError = false;

    if (Email.trim().length === 0) {
      setRegisterForm((prevState) => ({
        ...prevState,
        emailError: "Please enter Email.",
      }));
      hasError = true;
    }

    if (Password.trim().length === 0) {
      setRegisterForm((prevState) => ({
        ...prevState,
        passwordError: "Please enter Password.",
      }));
      hasError = true;
    }
    if (confirmPassword !== Password) {
      setRegisterForm((prevState) => ({
        ...prevState,
        confirmPasswordError: "Password do not match",
      }));
      hasError = true;
    }
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      setRegisterForm({
        Email: "",
        Password: "",
        confirmPassword: "",
        emailError: "",
        passwordError: "",
      });
      dispatch(registerUser(registerForm))
    }
  };
  return (
    <div className="main-content">
      <h2 className="mt-3 text-center">Register</h2>
      <div className="register-section">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => updateInput(e.target.id, e.target.value)}
            />
            <div style={{ color: "red", marginBottom: "10px" }}>
              {registerForm.emailError}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => updateInput(e.target.id, e.target.value)}
            />
            <div style={{ color: "red", marginBottom: "10px" }}>
              {registerForm.passwordError}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirm password"
              onChange={(e) => updateInput(e.target.id, e.target.value)}
            />
            <div style={{ color: "red", marginBottom: "10px" }}>
              {registerForm.confirmPasswordError}
            </div>
          </Form.Group>
          <Form.Group>
            <Button type="submit">Register</Button>
            <div className="mt-3 register-btn">
              Already have an account? <Link to="/login">login here</Link>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Register;
