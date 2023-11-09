import React, { Component } from "react";
import { Link} from "react-router-dom";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: "",
      res : false
    };
  }
  
  handleBtn = (e)=>{
    e.preventDefault()
  }
 
  render() {
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
