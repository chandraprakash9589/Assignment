
import React, { Component } from 'react'

export default class MyClassComponent extends Component {
  constructor(){
    console.log("Constructor called...")
    super();
    this.state= {
      name : "Jay prakash",
      data : []
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("state is: ",state)
    console.log("props are: ",props)
    console.log("getDerivedStateFromProps")
    return {
      name : props.fname
    };
  }

  componentDidMount(){
    console.log("component did mount called...")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{return response.json()})
    .then((json)=>{this.setState({
      data : json
    })})
    .catch((error)=>{console.log("Error: Data not Found", error)})
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate")
    console.log("prevState : ",prevState)
    return prevState
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("componentDidUpdate...")
    console.log("snapshot :",snapshot)
  }

  // componentWillUnmount(){
    
  // }

  render() {
    console.log("render....")
    console.log(this.state.data)
    return (
      
      <div>{this.state.name}</div>
    )
  }
}


// import React,{ Component } from 'react';

// export default class MyClassComponent extends Component {
//   render() {
//     console.log("hello")
//     return <h1>Hello, jay!</h1>;
//   }
// }



// import { Component, useState } from 'react';

// class MyClassComponent extends Component {
//   render() {
//     console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//     return <h3>Hello jay prakash!</h3>;
//   }
// }
// export default MyClassComponent;