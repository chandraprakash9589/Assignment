import React from "react";
import { useState } from "react";
import { Table, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
import TodoForm from "./TodoForm";

const ShowTodos = () => {
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  const [managetodo, setManagetodo] = useState({
    todos: list?.map((item)=>item.data),
    showEditModal: false,
    editedIndex: null,
  });
  
  const handleEditTodo = (index) => {
    const { title, description } = list[index].data;
    setManagetodo({
      ...managetodo,
      showEditModal: true,
      editedTitle: title,
      editedDescription: description,
      editedIndex: index,
    });
  };
  console.log(managetodo,"this is manage");
  const handleCloseEditModal = () => {
    setManagetodo({
      ...managetodo,
      showEditModal: false,
      editedTitle: "",
      editedDescription: "",
      editedIndex: null,
    });
  };

  const handleEditInputChange = (id, value) => {
    setManagetodo({
      ...managetodo,
      [id]: value,
    });
  };

  return (
    <>
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
              {list?.map((item, index) => (
                <tr key={index}>
                  <td>{item.data.title}</td>
                  <td>{item.data.description}</td>
                  <td>
                    <Button
                      variant="danger"
                      style={{ marginRight: "10px" }}
                      onClick={() => dispatch(deleteTodo(item.id))}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleEditTodo(index)}
                    >
                      Edit
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
              isEditMode={managetodo?.showEditModal}
              editedTitle={managetodo?.editedTitle}
              editedDescription={managetodo?.editedDescription}
              editedIndex={managetodo?.editedIndex}
              handleCloseEditModal={handleCloseEditModal}
              handleEditInputChange={handleEditInputChange}
              />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default ShowTodos;
