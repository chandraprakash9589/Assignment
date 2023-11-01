import React, { Component } from "react";

class Myprops extends Component{
    constructor(props){
        super(props)
        this.props=props
    }
    render(){
        return(
            <div className="App-header">Class based Props invoked in {this.props.tech}...</div>
        );
    }
}

export default Myprops;