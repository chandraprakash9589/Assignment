import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Error extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  static propTypes = {
    name : PropTypes.string
  }
  static defaultProps = {
    name : "XYZ"
  }
  componentWillUnmount(){
    console.log("component unmounted")
  }
  render() {
    return (
      <div>
          <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Error
