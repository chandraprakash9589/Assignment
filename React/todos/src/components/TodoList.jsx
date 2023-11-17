import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom'
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      title: "learn redux",
      description: "learn redux from chai aur code",
      error : {},
    };
  }
  validateCheck = () => {
    const newError = {};
    let isValid = true;
    const { title, description } = this.state;

    if (title.trim() === "") {
      newError.title= "title Error";
      isValid = false;
    }
    if (description.trim() === "") {
      newError.description= "description Error";
      isValid = false;
    }
    this.setState({error: newError})
    return isValid;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateCheck()) {
      const title = e.target.title.value;
      const description = e.target.description.value;
      // console.log("data",title)
      // window.history.pushState(null,null,"/ShowTo-Do-List")

      this.props.parentCallback(title, description);
      document.getElementById("successmsg").innerHTML="Successfully Added..."
      this.props.onSubmit();
    }
  };
  render() {
    const { title, description, error } = this.state;
    return (
      <>
        <div className="container mt-5 form1">
          <h1>Todos List</h1>
          <Form onSubmit={(e)=>this.handleSubmit(e)}>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label className="mt-5">Title</Form.Label>
             <span>
                <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  className="input1"
                  type="text"
                  placeholder="title"
                  aria-describedby="inputGroupPrepend"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  // isInvalid={!!errors.username}
                  />
                  <div style={{color:"red"}}>{error.title}</div>
                {/* <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback> */}
              </InputGroup>
                </span> 
            </Form.Group>
            <br />
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Description</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="description"
                  aria-describedby="inputGroupPrepend"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  // isInvalid={!!errors.username}
                />
                <div style={{color:"red"}}>{error.description}</div>
                {/* <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback> */}
              </InputGroup>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Add{" "}
              </Button>
              
              <p id="successmsg" style={{color:"red"}}></p>
                   

           <Link to={'/showTodo'}>
              <Button variant="primary">
                Show Todo{" "}
              </Button>
           </Link>
           
          </Form>
        </div>
      </>
    );
  }
}
