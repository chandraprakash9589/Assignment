import React, { Component } from "react";

export default class ShowDetails extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    this.props.onSubmit();
    window.history.pushState(null, null, "/registrationForm");
  };
  render() {
    const { userData } = this.props;
    return (
      <>
        <button
          onClick={this.back}
          type="button"
          className="btn btn-secondary mt-2 m-2"
        >
          &#8592; Back
        </button>

        <div
          style={{
            color: "blue",
            fontSize: "40px",
            textAlign: "center",
            marginTop: "0",
          }}
        >
          Registered User
        </div>
        <hr />
        <table className="table text-center fs-6">
          <thead>
            <tr>
              <th className="fs-3">Full Name</th>
              <th className="fs-3">Email Id</th>
              <th className="fs-3">City</th>
              <th className="fs-3">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
