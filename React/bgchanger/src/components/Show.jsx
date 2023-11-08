// import React from 'react';

// const ShowDetails = ({ userData }) => {
//   return (
//     <div>
//       <h1>{props.userData}</h1>
//     </div>
//   );
// };

// export default ShowDetails;

import React, { Component } from "react";

export default class ShowDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
          <div style={{color: "blue", fontSize: "50px", textAlign:"center"}}>Registered Data</div>
       
        {/* <div>{this.props.userData}</div> */}
        <table className="table">
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Email Id</th>
              <th>City</th>
              <th>Mobile Number</th>
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
