import React, { Component } from "react";
import DetailsForm from "./S";
import ShowDetails from "./Show";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      fname : "",
      email : "",
      city : "",
      mobile : "",
      userData: {},
    };
  }

  handleFormSubmit = (data) => {
    this.setState({
      showForm: false,
      // userData: data,
    });
    console.log("userdata");
    console.log(this.state.fname);
    console.log("showed userdata");
  };

  handleCallback = (fname,email,city,mobile)=>{
    this.setState({
      fname : fname,
      email : email,
      city : city,
      mobile : mobile,
    })
    // console.log(this.state.fname)
  }
  render() {
    const {fname}= this.state;
    const {email}= this.state;
    const {city}= this.state;
    const {mobile}= this.state;
    return (
      <div>
        {this.state.showForm ? (
          <DetailsForm onSubmit={this.handleFormSubmit} parentCallback={this.handleCallback} />
        ) : (
          <ShowDetails fname={fname} email={email} city={city} mobile={mobile} />
        )}
      </div>
    );
  }
}

export default UserDetails;
