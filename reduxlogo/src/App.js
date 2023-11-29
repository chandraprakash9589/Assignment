import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";

class App extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.stopAction, "i am stop ");
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              `${(this.props.rotating ? "App-logo" : "App-logo-paused")}`
            }
            onClick={
              this.props.rotating ? 
                this.props.stopAction : this.props.startAction
            }
            alt="logo"
          />
          {/* <button onClick={
              this.props.rotating ? 
                this.props.stopAction : this.props.startAction
            }>click me</button> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  ...state,
});


const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});


export default connect(mapStatetoProps, mapDispatchToProps)(App);
