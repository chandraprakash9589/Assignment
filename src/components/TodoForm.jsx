import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class TodoForm extends Component {
  componentDidMount() {
    // Attach the event listener when the component mounts
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is about to unmount
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }

  handleBeforeUnload = () => {
    // Clear localStorage before the page is unloaded (refreshed)
    localStorage.removeItem('todos');
  };
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      titleError: "",
      descriptionError: "",
    };
} 

  updateInput(key, value) {
    this.setState({
      [key]: value,
      [`${key}Error`]: ""
    });
  }

  addToDo() {
    if (this.state.title.trim() === "") {
      this.setState({
        titleError: "Please enter a title.",
      });
      return;
    }

    if (this.state.description.trim() === "") {
      this.setState({
        descriptionError: "Please enter a description.",
      });
      return;
    }

    const newTodo = {
      title: this.state.title,
      description: this.state.description,
    };

    //Retrieve existing todos from local storage
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

    // Add the new todo to the existing todos
    const updatedTodos = [...existingTodos, newTodo];

    // Save updated todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    this.setState({
      title: "",
      description: "",
      titleError: "",
      descriptionError: "",
    });
  }
  render() {
    return (
      <>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          ToDo List
        </Row>
        <Form className="container" style={{maxWidth: "480px"}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title"
              value={this.state.title}
              onChange={(e) => this.updateInput("title", e.target.value)}
            />
            <div style={{ color: "red", marginBottom: "10px" }}>
              {this.state.titleError}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter description"
              rows={3}
              value={this.state.description}
              onChange={(e) => this.updateInput("description", e.target.value)}
            />
            <div style={{ color: "red", marginBottom: "10px" }}>
              {this.state.descriptionError}
            </div>
          </Form.Group>
          <Button variant="primary" onClick={() => this.addToDo()} style={{padding: "6px 25px"}}>
            Add
          </Button>
          <br />
          <Link to="/showtasks">
          <Button variant="success" style={{ marginTop: "10px" }}>
            View Todos
          </Button>
        </Link>
        </Form>
      </>
    );
  }
}

export default TodoForm;