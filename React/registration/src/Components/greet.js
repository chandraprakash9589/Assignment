import React, { Component } from 'react';

// (((this.state.validate.confirmPassword && (this.state.validate.password !== this.state.validate.confirmPassword))  || !this.state.validate.confirmPassword)
//? 'error-input'
//: '')
class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errors: {},
      successMessage: '',
    };
  }

  validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const { fullName, email, password, confirmPassword } = this.state.formData;

    if (fullName.trim() === '') {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    this.setState({ errors: newErrors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      // Form is valid, handle registration logic here
      this.setState({ successMessage: 'Registration successful!' });
    } else {
      this.setState({ successMessage: '' });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));

    if (this.state.errors[name]) {
      // Clear the error message when the user starts typing
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [name]: '',
        },
      }));
    }
  };

  render() {
    const { fullName, email, password, confirmPassword } = this.state.formData;
    const { errors, successMessage } = this.state;

    return (
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
            <div className="error">{errors.fullName}</div>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <div className="error">{errors.email}</div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <div className="error">{errors.password}</div>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            <div className="error">{errors.confirmPassword}</div>
          </div>
          {successMessage && <div className="success">{successMessage}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;