import React ,{Component} from "react";

export default class ParameterEvent extends Component{
constructor(){
  super()
  this.handleEvent = this.handleEvent.bind(this)
}
  handleEvent(){
    alert("message passed....")
  }
  render(){
    return (
      <div>
          <h1>Welcome to React Tutorial...</h1>
          <button onClick={this.handleEvent}>click for more update </button>
      </div>
    );
  }
}