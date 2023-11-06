import React, { Component } from "react";
import { userContext } from "./CreateContext";
export class CompA extends Component {
  render() {
    let name = this.context;
    return (
      <div>
        <h1 style={{ color: name }}>hello</h1>
      </div>
    );
  }
}
CompA.contextType = userContext;

export default CompA;
