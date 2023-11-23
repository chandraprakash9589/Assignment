import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Todos from "./TodoList";
import "./component.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
 
const ShowToDoes = () => {
  const [state, setState] = useState({
    data: (localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : [],
    editingIndex: -1,
    updatedTitle: "",
    updatedDescription: "",
    isOpen: false,
    isRead: false,
    isUpdated: false,
  });

  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(state.data))
  },[state.data])

  const openModal = (index) => {
    setState({ 
      ...state,
      isOpen: true,
      updatedTitle: state.data[index].title,
      updatedDescription: state.data[index].description,
      editingIndex: index,
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      isOpen: false,
      updatedTitle: "",
      updatedDescription: "",
      editingIndex: null,
      isUpdated: false,
    });
  };

  const handleRemoveClick = useCallback((index) => {
    if (window.confirm("Are you sure you want to remove this todo?")) {
      const updatedData = [...state.data];
      updatedData.splice(index, 1);
      setState({ ...state, data: updatedData });
    }},[state.data])

  const handleMarkAsReadClick = useCallback((index) => {
    const updatedData = [...state.data];
    updatedData[index].isRead = true;
    setState({ ...state, data: updatedData });
  },[state.data]);

  const handleInputChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
      isUpdated: false,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const { editingIndex, updatedTitle, updatedDescription } = state;
    if (!(updatedTitle && updatedDescription).trim()) {
      alert("Title and description cannot be empty");
      return;
    }
    const updatedData = [...state.data];
    updatedData[editingIndex] = {
      ...updatedData[editingIndex],
      title: updatedTitle,
      description: updatedDescription,
    };
    // localStorage.setItem("data", JSON.stringify(updatedData));
    setState({ ...state, isUpdated: true, data: updatedData });
  };

  const { data } = state;
  return (
    <div>
      <Link to={"/Add-todo"}>
        <Button type="button" className="btn btn-primary mt-2 m-2">
          &#8592; Add new-todo
        </Button>
      </Link>
      <h1 className="text-center mt-5">To-Do List</h1>
      <Table className="text-center mt-4" striped bordered hover variant="dark">
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
                <td>
                  <span className={item.isRead ? "read" : null}>
                    {item.title}
                  </span>
                </td>
                <td>
                  <span className={item.isRead ? "read" : null}>
                    {item.description}
                  </span>
                </td>
                <td className="text-center">
                  <>
                    <Button
                      variant="secondary"
                      onClick={() => openModal(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveClick(index)}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => handleMarkAsReadClick(index)}
                    >
                      Done
                    </Button>
                  </>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Modal show={state.isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit To-Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Todos
            isUpdated={state.isUpdated}
            isEdit={state.isOpen}
            updatedTitle={state.updatedTitle}
            updatedDescription={state.updatedDescription}
            editingIndex={state.editingIndex}
            handleInputChange={handleInputChange}
            onUpdate={handleUpdate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowToDoes;

