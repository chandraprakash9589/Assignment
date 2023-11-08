// import React from 'react';

// const ShowDetails = ({ userData }) => {
//   return (
//     <div>
//       <h1>{props.userData}</h1>
//     </div>
//   );
// };

// export default ShowDetails;
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class ShowDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
     

        <Link to={"/"}>
          <button type="button" className="btn btn-secondary mt-2 m-2">
          &#8592; Back
          </button>
        </Link>
      
        <div style={{ color: "blue", fontSize: "40px", textAlign: "center", marginTop:"0"}}>
          Registered User
        </div>
        <hr />
        {/* <div>{this.props.userData}</div> */}
        <table className="table text-center fs-6">
          <tbody>
            <tr>
              <th className="fs-3">Full Name</th>
              <th className="fs-3">Email Id</th>
              <th className="fs-3">City</th>
              <th className="fs-3">Mobile Number</th>
            </tr>
            <tr>
              <td>{this.props.fname}</td>
              <td>{this.props.email}</td>
              <td>{this.props.city}</td>
              <td>{this.props.mobile}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
