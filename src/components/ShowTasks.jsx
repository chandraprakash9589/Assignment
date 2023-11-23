import React, { useState } from "react";
import { Table, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";

const ShowTasks = () => {
  const [managetodo, setManagetodo] = useState({
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    showEditModal: false,
    editedIndex: null,
  });

  const handleEditTodo = (index) => {
    setManagetodo({
      ...managetodo,
      showEditModal: true,
      editedTitle: managetodo.todos[index].title,
      editedDescription: managetodo.todos[index].description,
      editedIndex: index,
    });
  };

  const handleCloseEditModal = () => {
    setManagetodo({
      ...managetodo,
      showEditModal: false,
      editedTitle: "",
      editedDescription: "",
      editedIndex: null,
    });
  };

  const handleEditInputChange = (key, value) => {
    setManagetodo({
      ...managetodo,
      [key]: value,
    });
  };

  const handleEditSubmit = () => {
    const { editedTitle, editedDescription, editedIndex } = managetodo;
    const updatedTodos = [...managetodo.todos];
    updatedTodos[editedIndex] = {
      ...updatedTodos[editedIndex],
      title: editedTitle,
      description: editedDescription,
    };

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setManagetodo({ todos: updatedTodos, showEditModal: false });
  };

  const handleDeleteTodo = (index) => {
    let deleteTodo = [...managetodo.todos];
    deleteTodo.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(deleteTodo));
    setManagetodo({ todos: deleteTodo });
  };

  const handleReadTodo = (index) => {
    const updatedTodos = [...managetodo.todos];
    updatedTodos[index].isRead = !updatedTodos[index].isRead;

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setManagetodo({
      ...managetodo,
      todos: updatedTodos,
    });
  };
  const { todos } = managetodo;
  return (
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Link to="/">
          <Button variant="secondary" style={{ marginBottom: "10px" }}>
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
                  <td>
                    <Button
                      onClick={() => handleDeleteTodo(index)}
                      variant="danger"
                      style={{ marginRight: "10px" }}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => handleEditTodo(index)}
                      variant="primary"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleReadTodo(index)}
                      variant="info"
                      style={{
                        backgroundColor: item.isRead && "green",
                      }}
                    >
                      {item.isRead ? "Completed" : "Mark as Read"}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal show={managetodo.showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TodoForm
              isEditMode={managetodo.showEditModal}
              editedTitle={managetodo.editedTitle}
              editedDescription={managetodo.editedDescription}
              handleEditSubmit={handleEditSubmit}
              handleCloseEditModal={handleCloseEditModal}
              handleEditInputChange={handleEditInputChange}
            />
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
};

export default ShowTasks;
