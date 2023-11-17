import React, { Component } from "react";
import { Table, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class ShowTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      showEditModal: false,
      editedTitle: "",
      editedDescription: "",
      editedIndex: null
    };
  }

  handleEditTodo = (index) => {
    this.setState({
      showEditModal: true,
      editedTitle: this.state.todos[index].title,
      editedDescription: this.state.todos[index].description,
      editedIndex: index
    });
  }
  
  handleCloseEditModal = () => {
    this.setState({
      showEditModal:false,
      editedTitle: "",
      editedDescription: "",
      editedIndex: null
    })
  }

  handleEditInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEditSubmit = () => {
    const { editedTitle, editedDescription, editedIndex } = this.state;
    const updatedTodos = [...this.state.todos];
    updatedTodos[editedIndex] = {
      ...updatedTodos[editedIndex],
      title: editedTitle,
      description: editedDescription
    }

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos, showEditModal: false });
    
  };

  handleDeleteTodo = (index) => {
    let reduceTodo = [...this.state.todos];
    reduceTodo.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(reduceTodo));
    this.setState({ todos: reduceTodo });
  };

  handleReadTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].isRead = !updatedTodos[index].isRead;

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos });
  };
  
  render() {
    const todos = this.state.todos || [];

    return (
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Link to="/">
            <Button
              variant="secondary"
              onClick={this.props.goBack}
              style={{ marginBottom: "10px" }}
            >
              Go Back
            </Button>
          </Link>
          <h1>Todo List</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Todo Title</th>
                <th>Todo Description</th>
                <th>Manage Todo</th>
              </tr>
            </thead>
            <tbody>
              {todos &&
                todos.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <>
                    <div>
                      <span>
                        <Button
                          onClick={() => this.handleDeleteTodo(index)}
                          variant="danger"
                          style={{ marginRight: "10px" }}
                        >
                          Delete
                        </Button>
                      </span>
                      <span>
                        <Button
                          onClick={() => this.handleEditTodo(index)}
                          variant="primary"
                          style={{ marginRight: "10px" }}
                        >
                          Edit
                        </Button>
                      </span>
                      <span>
                        <Button
                          onClick={() => this.handleReadTodo(index)}
                          variant="info"
                          style={{
                            backgroundColor: item.isRead ? "green" : null,
                          }}
                        >
                          {item.isRead ? "Completed" : "Mark as Read"}
                        </Button>
                      </span>
                    </div>
                    </>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Modal show={this.state.showEditModal} onHide={this.handleCloseEditModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formEditTitle">
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Todo Title"
                    name="editedTitle"
                    value={this.state.editedTitle}
                    onChange={this.handleEditInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEditDescription">
                  <Form.Label>Task Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Task Description"
                    name="editedDescription"
                    value={this.state.editedDescription}
                    onChange={this.handleEditInputChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseEditModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleEditSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default ShowTasks;
