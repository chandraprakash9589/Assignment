import React, { Component } from "react";

export class Classcount extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (event) => {
    console.log(event.target.value);
    const reset = 0;
    const value = event.target.value;
    switch (value) {
      case "+":
        return this.setState({ result: this.state.result + 1 });
      case "-":
        return this.setState({ result: this.state.result - 1 });
      case "reset":
        return this.setState({ result: reset });
      default:
        return this.setState({ result: this.state.result });
    }
  };
  render() {
    return (
      <div>
        <h1 value={this.result}>{this.state.result}</h1>
        <button onClick={this.handleClick} value={"+"}>
          +
        </button>
        <button onClick={this.handleClick} value={"-"}>
          -
        </button>
        <button onClick={this.handleClick} value={"reset"}>
          reset
        </button>
      </div>
    );
  }
}

export default Classcount;
