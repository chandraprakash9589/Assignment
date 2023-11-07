import './../App.css'
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate , useNavigate} from "react-router-dom";


export default class InputDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputdata : {
        fname : '',
        mobile : '',
        email : '',
        city : '',
      },
      inputValid : true,
    errors: {},
    newdata : {},
    }
    
  }
  validationCheck = () => {
    let inputValid = true;
    const newErrors = {};

    const { fname, email, city, mobile } = this.state.inputdata;

    if (fname.trim() === '') {
      newErrors.fname = 'Full Name is required';
      inputValid = false;
    }else if (!/^[a-zA-Z]+$/.test(fname)) {
      newErrors.fname = 'Full Name is invalid';
      inputValid = false;
    }
    
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      inputValid = false;
    }else if (!/^\S+@g(oogle)?mail\.com$/.test(email)) {
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


handleSubmit = (e) => {
  e.preventDefault();

  if (this.validationCheck()) {
    alert("Succesfull.....")
    console.log(this.state.inputdata);
  }
};

  handleChange = (e) => {

    //to again after error occur 
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputdata: {
        ...prevState.inputdata,
        [name]: value,
      },
    }));

    if (this.state.errors[name]) {
      //clear the error message when the user starts typing
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
        <form className="container mt-5" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Full name</b>
            </label>
            <input
              type="text"
              name='fname'
              value={this.state.inputdata.fname}
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
              value={this.state.inputdata.email}
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
              value={this.state.inputdata.city}
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
              value={this.state.inputdata.mobile}
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
