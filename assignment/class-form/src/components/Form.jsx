import React, { Component } from "react";
import { Navigate } from "react-router-dom";
export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "nik",
      email: "",
      mobile: "",
      city: "",
      err: {},
      data: [],
      main: false,
      userinfo: [],
      isRedirect: false,
    };
    // console.log(this.state)
  }
  handleClick = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((d) => ({ ...d, [name]: value }));
    
  };
  formValid = () => {
    const mobreg = /^((?!(0))[0-9])/;
    let err = this.state.err;
    if (this.state.fname === "") {
      err.nameerr = "Fullname is required";
    } else {
      err.nameerr = "";
    }

    if (this.state.email === "") {
      err.emailerr = "email is required";
    } else {
      err.emailerr = "";
    }
    if (this.state.mobile === "") {
      err.moberr = "Mobile Number is required";
    } else if (!this.state.mobile.match(mobreg)) {
      err.mobnum = "Mobile number should be number";
    } else {
      err.moberr = "";
      err.mobnum = "";
    }
    if (this.state.mobile.length < 10) {
      err.mobnum = "Enter 10 digits Mobile number";
    } else {
      err.moblen = "";
    }
    if (this.state.city === "") {
      err.cityerr = "city is required";
    } else {
      err.cityerr = "";
    }
    this.setState({ err });
    let valid = true;
    Object.values(err).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    console.log(valid);
    return valid;
  };
  handleForm = (formData) => {
    this.setState((prevstate) => ({
      ...prevstate, formData
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // if (this.formValid()) {
      
      const {fname,data,count,
      email,
      mobile,
      city} = this.state;

      data.push({fname:fname,email:email,mobile:mobile,city:city})
      console.log(data)
    //   // this.setState({data: data });
    //   this.handleForm(data);
      // console.log(data, "data++++++++++++++++++ ");
      localStorage.setItem(fname ,JSON.stringify( data
     ));
      this.setState({
        isRedirect: true,
      });
    // }
  };

  render() {
    if (this.state.isRedirect) {
      return (
        <Navigate
          to="/show"
          replace={true}
          state={{ userinfo : this.state.userinfo }}
        />
      );
    }
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
                // value={this.state.data.city}
                onChange={this.handleClick}
              />
              <div className="form-text error-message">
                {this.state.err.cityerr}
              </div>
            </div>

            <button type="submit" id="btn" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
