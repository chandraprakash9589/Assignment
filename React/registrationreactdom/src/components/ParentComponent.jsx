import React, { Component } from "react";
import DetailsForm from "./InputDetail";
import ShowDetails from "./ShowDetail";
import { Router, Route, Routes } from "react-router-dom";

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

    this.setState((prevState) => ({
      data: [...prevState.data, userData],
      showForm: false,
    }));
  
  };
  render() {

    return (
      <div>
        {this.state.showForm ? ( <Routes>
          <Route exact path='/' element={
          <DetailsForm
            onSubmit={this.handleFormSubmit}
            parentCallback={this.Callback}
          />
          }></Route>
        </Routes>

        ) : (<Routes>
          
          <Route exact path='/users' element={
         
          <ShowDetails
          onSubmit={this.back}
            showForm = {this.state.showForm}
            userData = {this.state.data}
          />
          }></Route>
        </Routes>
        )}
      </div>
    );
  }
}

export default UserDetails;
