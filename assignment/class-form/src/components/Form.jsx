import React, { Component } from "react";
import { NavLink, Navigate } from "react-router-dom";
import ShowDetails from "./ShowDetails";
export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      email: "",
      mobile: "",
      city: "",
      err: {},
      data: [],
    };
    // const data = []
    // data.push(this.state)
    // console.log(data)
  }
  handleClick = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((data) => ({ ...data, [name]: value }));
  };
  formValid = () => {
    const mobreg = /^((?!(0))[0-9])/;
    let err = this.state.err;
    if (this.state.fname === "") {
      err.nameerr = "Fullname is required";
    }

    if (this.state.email === "") {
      err.emailerr = "email is required";
    }
    if (this.state.mobile === "") {
      err.moberr = "Mobile Number is required";
    } else if (this.state.mobile.match(mobreg)) {
      err.mobnum = "";
    } else {
      err.mobnum = "Mobile number should be number";
    }
    if (this.state.mobile.length < 10) {
      err.mobnum = "Enter 10 digits Mobile number";
    }
    if (this.state.city === "") {
      err.cityerr = "city is required";
    }
    this.setState({ err });
    return err;
  };
  
 
  handleSubmit = (event) => {
    this.formValid();

    event.preventDefault();
    const data = this.state.data;
    data.push(this.state);
    this.setState({ data });
    console.log(data);
    console.log(this.state.fname);
  };

  render() {
    const err = this.state.err;
    const l = Object.keys(err).length
    console.log(l)
  
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} action="#">
            <div className="mb-3">
              <label labelfor="exampleInputName" className="form-label">
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                name="fname"
                value={this.state.fname}
                onChange={this.handleClick}
              />

              <div className="form-text error-message">
                {this.state.err.nameerr}
              </div>
            </div>
            <div className="mb-3">
              <label labelfor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                value={this.state.email}
                onChange={this.handleClick}
              />
              <div className="form-text error-message">
                {this.state.err.emailerr}
              </div>
            </div>
            <div className="mb-3">
              <label labelfor="exampleInputMobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleClick}
              />
            
              <div className="form-text error-message">
                {this.state.err.moberr}
              </div>
              <span className="form-text error-message">
                {this.state.err.mobnum}
              </span>
              <span className="form-text error-message">
                {this.state.err.moblen}
              </span>
            </div>
            <div className="mb-3">
              <label labelfor="exampleInputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={this.state.city}
                onChange={this.handleClick}
                // onClick={this.formValid}
              />
              <div className="form-text error-message">
                {this.state.err.cityerr}
              </div>
            </div>
            <button type="submit" id='btn'className="btn btn-primary">
                Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
