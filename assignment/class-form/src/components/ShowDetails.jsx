import React, { Component } from "react";

export class ShowDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userd: props.data,
    };
  }
 
  render() {
    const p = this.props.data
    console.log("lklklk",this.props.data)

    // console.log("show call", this.props.location);
    // console.log(Array.isArray(this.props.userdata));
    const locdata = JSON.parse(localStorage.getItem(p))
    console.log(locdata,"loc")
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">city</th>
            </tr>
          </thead>
          
          <tbody>
            {locdata ? (
              locdata.map((val, index) => {
                console.log(val,'val')

                return (
                  <tr key={index}>
                    <td>{val.fname}</td>
                    <td>{val.email}</td>
                    <td>{val.mobile}</td>
                    <td>{val.city}</td>
                  </tr>
                );
              })
              ): <tr></tr>
              
            }
            </tbody>
        </table>
      </div>
    );
  }
}

export default ShowDetails;
