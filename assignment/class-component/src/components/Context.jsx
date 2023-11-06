import React, { Component } from "react";
import { userContext } from "./CreateContext";
import CompA from "./CompA";

export class Context extends Component {
  render() {
    let name = this.context;
    return (
      <div>
        <h1 style={{ color: name }}>{name}</h1>
        <CompA />
      </div>
    );
  }
}
Context.contextType = userContext;

export default Context;
