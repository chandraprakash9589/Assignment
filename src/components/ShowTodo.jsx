import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import TodoList from "./TodoList";
import Modal from "react-bootstrap/Modal";

const ShowTodo = (props) => {
  const {
    data,
    addTodoHandler,
    editTodoHandler,
    removeTodoHandler,
    doneTodoHandler,
  } = props;
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEditTodo = (index) => {
    setEditingTodo({ index, data: data[index].list });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditingTodo(null);
    setShowEditModal(false);
  };

  return (
    <>
      <div className="container">
        <Link to={"/"}>
          <Button className="btn btn-primary mt-3">Add new</Button>
        </Link>
        <h1 className="text-center">To-Do List</h1>
        <Table
          className="text-center mt-5"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.list.title}</td>
                  <td>{item.list.description}</td>
                  <td className="text-center">
                    <>
                      <Button
                        variant="secondary"
                        onClick={() => handleEditTodo(index)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        onClick={() => removeTodoHandler(index)}
                      >
                        Remove
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => doneTodoHandler(index)}
                      >
                        {item.read ? "Completed" : "Done"}
                      </Button>
                    </>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TodoList
              addTodoHandler={addTodoHandler}
              editTodoHandler={editTodoHandler}
              editingTodo={editingTodo}
              handleCloseEditModal={handleCloseEditModal}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ShowTodo;
