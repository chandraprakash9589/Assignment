import React, { Component } from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ShowTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  }
  render() {
    const todos = this.state.todos || [];

    const handleDeleteTodo = (index) => {
      let reduceTodo = [...this.state.todos];
      reduceTodo.splice(index, 1);

      localStorage.setItem("todos", JSON.stringify(reduceTodo));
      this.setState({ todos: reduceTodo });
    };

    const handleEditTodo = (index) => {
      const updatedTodos = this.state.todos.map((item, i) => {
        if (i === index) {
          const title = prompt("Enter Task Title");
          const description = prompt("Enter Task Description");

          return {
            ...item,
            title: title || item.title,
            description: description || item.description,
          };
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      this.setState({ todos: updatedTodos });
    };

    const handleReadTodo = (index) => {
      const updatedTodos = [...this.state.todos];
      updatedTodos[index].isRead = !updatedTodos[index].isRead;

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      this.setState({ todos: updatedTodos });
    };
    
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
                    <div>
                      <span>
                        <Button
                          onClick={() => handleDeleteTodo(index)}
                          variant="danger"
                          style={{ marginRight: "10px" }}
                        >
                          Delete
                        </Button>
                      </span>
                      <span>
                        <Button
                          onClick={() => handleEditTodo(index)}
                          variant="primary"
                          style={{ marginRight: "10px" }}
                        >
                          Edit
                        </Button>
                      </span>
                      <span>
                        <Button
                          onClick={() => handleReadTodo(index)}
                          variant="info"
                          style={{
                            backgroundColor: item.isRead ? "green" : null,
                          }}
                        >
                          {item.isRead ? "Completed" : "Mark as Read"}
                        </Button>
                      </span>
                    </div>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default ShowTasks;
