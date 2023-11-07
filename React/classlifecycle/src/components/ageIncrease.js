import React,{Component} from "react";
import PropTypes from "prop-types";

export default class MyAge extends Component{
  constructor(){
    super()
    this.state = {
      age : 5
    }
    this.changeAge = this.changeAge.bind(this)
  }

  changeAge(){
    this.setState({
      age : this.state.age + 1
    })
  }
  render(){console.log("hello")
    return(
      <div>
        <div>
          <h1>my age is {this.state.age}</h1>
        <button onClick={this.changeAge}>click</button>
        </div>
      </div>
    );
  }

}

MyAge.propTypes={age: PropTypes.number.isRequired}