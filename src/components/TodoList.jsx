import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

const Todos = ({
  isUpdated,
  isEdit,
  updatedTitle,
  updatedDescription,
  onUpdate,
  handleInputChange,
}) => {
  const [state, setState] = useState({
    title: "learn redux",
    description: "learn redux from chai aur code",
    error: {},
  });
  const [input, setInput] = useState(true);

  const validateCheck = () => {
    const newError = {};
    let isValid = true;
    const { title, description } = state;
    if (!title.trim()) {
      newError.title = "-Title Error";
      isValid = false;
    }
    if (!description.trim()) {
      newError.description = "-Description Error";
      isValid = false;
    }
    setState((prevState) => ({ ...prevState, error: newError }));
    return isValid;
  };

  const handleChange = (id, value) => {
    setState((prevState) => ({
      ...prevState,
      error: false,
      [id]: value,
      [`${id}Error`]: null,
    }));
    setInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCheck()) {
      const userData = {
        title: state.title,
        description: state.description,
      };
      setInput(false);
      console.log("userdata:", userData);
      const existingData = JSON.parse(localStorage.getItem("data")) || [];
      const updatedData = [...existingData, userData];
      localStorage.setItem("data", JSON.stringify(updatedData));
      setState((prevState) => ({
        ...prevState,
        title: "learn React",
        description: "From youtube..",
      }));
    }
  };

  const { title, description, error } = state;
  return (
    <>
      <div className="container">
        {isEdit ? null : <h1 className="mt-5 ">To-do Form</h1>}
        <Form
          onSubmit={(e) => {
            isEdit ? onUpdate(e) : handleSubmit(e);
          }}
        >
          <Form.Group>
            <Form.Label className="mt-5">Title</Form.Label>
            <span>
              <InputGroup >
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="title"
                  id="title"
                  value={isEdit ? updatedTitle : title}
                  onChange={(e) =>
                    isEdit
                      ? handleInputChange("updatedTitle", e.target.value)
                      : handleChange(e.target.id, e.target.value)
                  }
                />
                <div style={{ color: "red", paddingRight: "100px" }}>
                  {error.title}
                </div>
              </InputGroup>
            </span>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="description"
                aria-describedby="inputGroupPrepend"
                id="description"
                value={isEdit ? updatedDescription : description}
                onChange={(e) =>
                  isEdit
                    ? handleInputChange("updatedDescription", e.target.value)
                    : handleChange(e.target.id, e.target.value)
                }
              />
              <div style={{ color: "red", paddingRight: "100px" }}>
                {error.description}
              </div>
            </InputGroup>
          </Form.Group>
          <br />
          <br />
          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Add To-Do"}
          </Button>
          {" "}
          {isUpdated ? <span className="text-danger">Updated...</span> : null}
          {input ? null : <span className="text-danger">To-do Added...</span>}
          <br />
          <br />
          {isEdit ? (
            null
          ) : (
            <Link to={"/"}>
              <Button variant="primary">Show To-Do</Button>
            </Link>
          )}
        </Form>
      </div>
    </>
  );
};

export default Todos;
