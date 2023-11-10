import React, { Component } from "react";

export class DetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      city: "",
      mobile: "",
      errors: {},
      successMessage: "",
      isSubmitted: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  validateForm() {
    const { name, email, city, mobile } = this.state;
    let errors = {};

    if (!name) {
      errors.name = "Please enter a name";
    }

    if (!email) {
      errors.email = "Please enter email address";
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      errors.email = "Invalid Email Address";
    }

    if (!city) {
      errors.city = "Please enter a city";
    }

    if (!mobile) {
      errors.mobile = "Please enter a mobile number";
    } else if (mobile.length !== 10) {
      errors.mobile = "Please enter a 10 digit mobile number";
    }
    return errors;
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errors: { ...this.state.errors, [name]: "" },
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
      this.props.parentCallback(this.state.name, this.state.email, this.state.city, this.state.mobile);
      this.setState({
        successMessage: "Your Form is Submitted Successfully",
        errors: {},
        isSubmitted: true
      });

    } else {
      this.setState({ errors });
    }
  }
  
  
  render() {
    const { name, email, city, mobile, errors, successMessage } = this.state;
    return (
      <>
        {<div className="success-message">{successMessage}</div>}
        <form onSubmit={this.handleOnSubmit} className="container">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={this.handleInputChange}
            />
            {<div className="error-message">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleInputChange}
            />
            {<div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              className="form-control"
              id="city"
              placeholder="Enter City"
              onChange={this.handleInputChange}
            />
            {<div className="error-message">{errors.city}</div>}
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              className="form-control"
              id="mobile"
              placeholder="Enter Mobile Number"
              onChange={this.handleInputChange}
            />
            {<div className="error-message">{errors.mobile}</div>}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleOnSubmit}
          >
            Submit
          </button>
        </form>
      </>
      
    );
  }
}

export default DetailsForm;