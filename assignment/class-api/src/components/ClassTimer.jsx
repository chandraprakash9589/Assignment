import React, { Component } from "react";

export class ClassTimer extends Component {
  constructor() {
    super();

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((data) => ({ timer: data.timer + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.timer}</p>
      </div>
    );
  }
}

export default ClassTimer;
