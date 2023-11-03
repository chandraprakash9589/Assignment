import axios from "axios";
import React, { Component } from "react";

export class Classapi extends Component {
  constructor() {
    super();
    this.state = {
      useid: "",
      titles : "",
      head : "",
    };
  }
  handleChange = (e) => {
    // this.setState((d)=>({...d,[e.target.name]:e.target.value}))
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts");
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const {userId} = this.state
    return (
      <>
        {/* {this.state.data.map((data) => {
          return <p key={data.id}>{data.title}</p>;
        })} */}
        <form onSubmit={this.handleSubmit}>
          
          <input type="text" name="userid" value={this.state.userid} onChange={this.handleChange}/>
          <input type="text" name="titles" value={this.state.titles} onChange={this.handleChange}/>
          <input type="text" name="head" value={this.state.head} onChange={this.handleChange}/>

          <button>Click</button>
        </form>
      </>
    );
  }
}

export default Classapi;
