import React, { Component } from "react";

class ShowDetails extends Component {
  render() {
    const { userData } = this.props;

    return (
          <div>
          <h2>Users Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((userData, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{userData.name}</td>
              <td>{userData.email}</td>
              <td>{userData.city}</td>
              <td>{userData.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
    );
  }
}

export default ShowDetails;