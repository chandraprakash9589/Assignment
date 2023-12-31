import React, { Component } from "react";
import DetailsForm from "./InputDetail";
import ShowDetails from "./ShowDetail";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      fname: "",
      email: "",
      city: "",
      mobile: "",
      userData: null,
      data : []
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
  back=()=>{
    this.setState({
      showForm:true
    })
  }

  Callback = (fname,email,city,mobile) => {
    const userData= {fname,email,city,mobile};
    // this.setState({
    //   // fname: fname,
    //   // email: email,
    //   // city: city,
    //   // mobile: mobile,
    //   // data: {fname,email,city,mobile},
    //   userData : data
    // }); 
    // console.log("data1",data)
    // console.log("userData",this.state.userData)
    this.setState((prevState) => ({
      data: [...prevState.data, userData],
      showForm: false,
    }));
    // console.log(this.state.fname)
  };
  render() {
    // const { fname } = this.state;
    // const { email } = this.state;
    // const { city } = this.state;
    // const { mobile } = this.state;
    // let userData = []
    return (
      <div>
        {this.state.showForm ? (
          <DetailsForm
            onSubmit={this.handleFormSubmit}
            parentCallback={this.Callback}
          />
        ) : (
          <ShowDetails
          onSubmit={this.back}
            // fname={fname}
            // email={email}
            // city={city}
            showForm = {this.state.showForm}
            // mobile={mobile}
            userData = {this.state.data}
          />
        )}
      </div>
    );
  }
}

export default UserDetails;
