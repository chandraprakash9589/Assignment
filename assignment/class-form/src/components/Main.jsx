import React, { Component } from "react";
import Form from "./Form";
import { NavLink } from "react-router-dom";
export class Main extends Component {
  render() {
    return (
      <div>
        {/* navbar start */}

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">
              

              <button className="btn btn-outline-success" type="submit">
                Form
              </button>
              
            </form>
          </div>
        </nav>
       <Form/>
      </div>
    );
  }
}

export default Main;
