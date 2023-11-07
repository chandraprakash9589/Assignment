import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello' };
    console.log('Constructor: Component is being born.');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Setting state based on props.');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component is now on the web page.');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should the component re-render?');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture information before update.');
    return null; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Cleaning up before component leaves.');
  }

  changeMessage = () => {
    this.setState({ message: 'Updated Message' });
  };

  render() {
    console.log('render: Creating the component UI.');
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Update Message</button>
      </div>
    );
  }
}

export default LifecycleExample;

