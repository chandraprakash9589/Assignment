import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       err : null
    }
  }
  static getDerivedStateFromErrors(err){
    return {err : true}
    console.log("run")
  }
  
  render() {
    return (
      <div>
        {this.state.err ? <p>This is error</p> : <p>no error</p>}
      </div>
    )
  }
}

export default ErrorBoundary
