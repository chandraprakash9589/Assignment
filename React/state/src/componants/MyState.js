import React, { Component } from "react";

class MyState extends Component {
    constructor(props) {
        super(props)
        this.state={
            name : "Jay prakash Gupta"
        }
    }
    render() {
        const internalCSS = {
            color :'RED',
        }
        return (
            <>
                <div style={internalCSS}>Hey Dude!, My name is {this.state.name},
                    Welcome to React tutorial.
                </div>
            </>
        );
    }
}

export default MyState;