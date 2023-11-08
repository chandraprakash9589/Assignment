import React, { Component } from "react";
import Form from "./Form";
import { Link, Navigate } from "react-router-dom";
import ShowDetails from "./ShowDetails";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: "",
      res : false
    };
  }
  
  handleBtn = ()=>{
    this.setState({res:true})
  }
 
  render() {
    console.log(this.state.res);
    return (
      <div>
        {/* navbar start */}

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            
              <button
                className="btn btn-outline-success" onClick={this.handleBtn}
              >
                <Link to="/form">Form</Link>
              </button>
          </div>
        </nav>

         {/* {this.state.userinfo && !this.state.res ? (
           <Form formsubmit={this.handleForm} />
          <ShowDetails userdata={this.state.userinfo} />
        ) : (
        )}  */}
      </div>
    );
  }
}

export default Main;
