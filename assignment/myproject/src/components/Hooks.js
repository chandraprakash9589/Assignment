import React from "react";

class Hooks extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = ()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <>
            <h1 value={this.count}>{this.state.count}</h1>

            <button onClick={this.handleChange}>click</button>
            </>
        )
    }
}
export default Hooks