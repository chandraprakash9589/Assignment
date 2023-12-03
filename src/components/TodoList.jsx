import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function TodoForm(props) {
  const { addTodoHandler, editTodoHandler, editingTodo, handleCloseEditModal } =
    props;
  const [title, setTitle] = useState("this is title 1");
  const [description, setDescription] = useState("this is description 1");
  const [addData, setAddData] = useState(false);
  const [updatedData, setUpdatedData] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.data.title);
      setDescription(editingTodo.data.description);
    }
  }, [editingTodo]);

  let isValid = true;
  const validateCheck = () => {
    const newError = {};
    if (!title.trim()) {
      newError.title = " - Invalid Title";
      isValid = false;
    }
    if (!description.trim()) {
      newError.description = "- Invalid Description";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };

  const handleAddOrUpdateTodo = (e) => {
    e.preventDefault();
    if (validateCheck()) {
      if (editingTodo) {
        editTodoHandler(
          editingTodo.index,
          { title, description },
          setUpdatedData(true)
        );
        // handleCloseEditModal();
      } else {
        addTodoHandler({ title, description });
        setTitle(" this is title 2");
        setDescription(" this is description 2");
        setAddData(true);
      }
    }
  };

  const inputChange = (event) => {
    setAddData(false);
    setUpdatedData(false);
  };

  return (
    <>
      <div className="container">
        {editingTodo ? null : <h1 className="mt-5">To-Do Form</h1>}
        <Form>
          <Form.Group>
            <Form.Label className="mt-5">Title</Form.Label>
            <InputGroup className="mb-4">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Title"
                type="text"
                name="title"
                required
                value={title}
                onChange={(event) => inputChange(setTitle(event.target.value))}
              />
              <span className="text-danger">{error.title}</span>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Description"
                type="text"
                required
                name="description"
                value={description}
                onChange={(event) =>
                  inputChange(setDescription(event.target.value))
                }
              />
              <span className="text-danger">{error.description}</span>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button onClick={handleAddOrUpdateTodo}>
              {editingTodo ? "Update" : "Add"}
            </Button>

            {addData ? (
              <span className="text-danger"> Added Todo...</span>
            ) : null}
            {updatedData ? (
              <span className="text-danger"> Updated...</span>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            {editingTodo ? null : (
              <Link to={"/Show-Todo"}>
                <Button>Show To-do</Button>
              </Link>
            )}
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
