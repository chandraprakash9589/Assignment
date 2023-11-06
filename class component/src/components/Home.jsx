import React from "react";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
    };
  }
  componentDidUpdate(props, state, snapShot) {
    console.warn("componentDidUpdate",snapShot);
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    return preState.currentValue*10
  }
  render() {
    return (
      <div>
        <h1>{this.state.currentValue}</h1>
        <button onClick={()=>{
          this.setState({ currentValue: this.state.currentValue+1})
        }}>
          update state
        </button>
      </div>
    );
  }
}
