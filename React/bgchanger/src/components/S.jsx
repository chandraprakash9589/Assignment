import React, { Component } from 'react';

class DetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      email: '',
      city: '',
      mobile: '',
      errors: {},
    };
  }
  validationCheck = () => {
    let inputValid = true;
    const newErrors = {};
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    const { fname, email, city, mobile } = this.state;

    if (fname.trim() === '') {
      newErrors.fname = 'Full Name is required';
      inputValid = false;
    }else if (!( /^[a-zA-Z]+\s+[a-zA-Z]+$/).test(fname)) {
      newErrors.fname = 'Full Name is invalid';
      inputValid = false;
    }
    
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      inputValid = false;
    }else if (!/^\S+@gmail\.com$/.test(email)) {
      newErrors.email = 'Email is invalid';
      inputValid = false;
    }
    
    if (city.trim() === '') {
      newErrors.city = 'City name is required';
      inputValid = false;
    }
    if (mobile.length < 10 ) {
      newErrors.mobile = '10 digit mobile number is required';
      inputValid = false;
    }else if (mobile.length > 10 ) {
      newErrors.mobile = '10 digit mobile number is required';
      inputValid = false;
    }
    

    if (!/^[a-zA-Z]+$/.test(city)) {
      newErrors.city = 'City is invalid';
      inputValid = false;
    }

    
    this.setState({ errors: newErrors });
    return inputValid;
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validationCheck()) {
      const fname = e.target.fname.value
      const email = e.target.email.value
      const city = e.target.city.value
      const mobile = e.target.mobile.value
      this.props.parentCallback(fname,email,city,mobile)
      this.props.onSubmit();
      
    }
  };

  handleChange = (e) => {

    const { name, value } = e.target;
    this.setState((prevState) => ({
     
        [name]: value,
      
    }));

    if (this.state.errors[name]) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [name]: '',
        },
      }));
    }
  };
  render() {
    return (
      <>
      <form  className="container mt-5" onSubmit={this.handleFormSubmit}>
                  <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Full name</b>
            </label>
            <input
              type="text"
              name='fname'
              value={this.state.fname}
              className="form-control"
              onChange={this.handleChange}
              id="exampleFormControlInput1"
              placeholder="e.g. Jay prakash Gupta"
            />
            <div className="error">{this.state.errors.fname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="form-control "
              onChange={this.handleChange}
              // id={this.state.inputdata.email? '': 'inputbox'}
              placeholder="e.g. name@example.com"
            />
            <div className="error">{this.state.errors.email}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>City</b>
            </label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              className="form-control"
              onChange={this.handleChange}
              id="exampleFormControlInput1"
              placeholder="e.g. Indore"
            />
            <div className="error">{this.state.errors.city}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Mobile Number</b>
            </label>
            <input
              type="number"
              name='mobile'
              value={this.state.mobile}
              className="form-control"
              onChange={this.handleChange}
              id="exampleFormControlInput1"
              placeholder="e.g. 8878035012"
            />
            <div className="error">{this.state.errors.mobile}</div>
          </div>
          

          <div className="col-12">
            <button onClick={this.handleClick} className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>

      </form>
      </>
    );
  }
}

export default DetailsForm;