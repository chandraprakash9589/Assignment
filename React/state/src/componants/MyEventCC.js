import React, { Component } from 'react';

class MyEventC extends Component {
    constructor(props) {
        super(props)
    }
    clickEvents() {
        alert("Handle Event in Class Based Component...")
    };
    render() {
        return (
            <>
                <div><button style={{ background: 'red', color: 'white', padding: "10px 30px", borderRadius: "10px" }} onClick={this.clickEvents}>click class component</button></div>
                <h1 className='heading'>Events in React JS...</h1>

            </>
        );
    }
}

export default MyEventC;