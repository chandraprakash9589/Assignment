import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Snapshot extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  componentDidUpdate(prop,state,snapshot){

    console.log("pre value",snapshot)
  }
  getSnapshotBeforeUpdate(preProps,preState){
    return preState
  }
 
  handleClick = ()=>{
    this.setState({count:this.state.count+1})
  }
  componentWillUnmount(){
    console.log("component unmounted")
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}> click me </button>
        <NavLink to="error">Error</NavLink>
        <NavLink to="about">About</NavLink>

      </div>
    )
  }
}

export default Snapshot
