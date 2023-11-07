import React, { Component } from 'react'

export default class Counter02 extends Component {
  shouldComponentUpdate(nextProps,nextState){
    if(this.props.value !== nextProps.value){
      return true
    }
    return false
  }
  
  render() {
    console.log("counter02 called...")
    return (
      <div>
        <div>
          <div>
            counter01 : {this.props.value}
          </div>
          <div>
            <button onClick={this.props.onClick}>add</button>
          </div>
        </div>
      </div>
    )
  }
}
