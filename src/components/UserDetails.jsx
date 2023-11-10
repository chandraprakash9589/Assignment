import React, { Component } from "react";
import DetailsForm from "./DetailsForm";
import ShowDetails from "./ShowDetails";


export class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      isSubmitted: false,
      submittedData: [], //Stores all submitted data
    };
  }
  handleCallback = (name, email, city, mobile) => {
    const userData = { name, email, city, mobile };

    this.setState((prevState) => ({
      submittedData: [...prevState.submittedData, userData],
      isSubmitted: true,
    }));
  };

  handleFormReset = () => {
    this.setState({ isSubmitted: false });
  };
  render() {
    return (
      <>
        <button className="btn btn-success" onClick={this.handleFormReset}>
          New Form
        </button>
        {this.state.isSubmitted ? (
          <ShowDetails userData={this.state.submittedData} />
        ) : (
          <DetailsForm parentCallback={this.handleCallback} />
        )}
      </>
    );
  }
}

export default UserDetails;