import React, { Component } from "react";
import { connect } from "react-redux";

export class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  render() {
    const counter = this.props;
    console.log(this.props);
    return (
      <>
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>
          <div>
            <button
              className="btn btn-primary mx-2"
              title="Decrement"
              onClick={this.decrementHandler.bind(this)}
            >
              -
            </button>
            Counter:{counter.counter}
            <button
              className="btn btn-primary mx-2"
              title="Increment"
              onClick={this.incrementHandler.bind(this)}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
