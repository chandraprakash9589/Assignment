import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

const TodoForm = (props) => {
  const {
    isEditMode,
    editedTitle,
    editedDescription,
    handleEditSubmit,
    handleCloseEditModal,
    handleEditInputChange,
  } = props;

  const [form, setForm] = useState({
    title: "",
    description: "",
    titleError: "",
    descriptionError: "",
    isRedirect: false,
  });

  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const updateInput = useCallback((id, value) => {
    setForm((prevForm) => ({ ...prevForm, [id]: value, [`${id}Error`]: "" }));
  }, []);

  const addToDo = useCallback(() => {
    const { title, description } = form;

    if (title.trim().length === 0) {
      setForm((prevState) => ({
        ...prevState,
        titleError: "Please enter a title.",
      }));
      return;
    }

    if (description.trim().length === 0) {
      setForm((prevState) => ({
        ...prevState,
        descriptionError: "Please enter a description.",
      }));
      return;
    }

    const newTodo = {
      title: title,
      description: description,
    };

    // Retrieve Storedtodos from local storage
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    // Add the new todo to the stored todos
    const updatedTodos = [...storedTodos, newTodo];

    // Save updated todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setForm({
      isRedirect: true,
      title: "",
      description: "",
      titleError: "",
      descriptionError: "",
    });
  }, [form]);

  useEffect(() => {
    if (form.isRedirect === true) {
      navigate("/showtasks");
    }
  });

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
        {isEditMode || "ToDo List"}
      </Row>
      <Form className="container" style={{ maxWidth: "480px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id='title'
            placeholder="Enter the title"
            value={isEditMode ? editedTitle : form?.title}
            onChange={(e) =>
              isEditMode
                ? handleEditInputChange("editedTitle", e.target.value)
                : updateInput(e.target.id, e.target.value)
            }
            ref={titleRef}
          />
          <div style={{ color: "red", marginBottom: "10px" }}>
            {form.titleError}
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            id="description"
            placeholder="Enter description"
            rows={3}
            value={isEditMode ? editedDescription : form?.description}
            onChange={(e) =>
              isEditMode
                ? handleEditInputChange("editedDescription", e.target.value)
                : updateInput(e.target.id, e.target.value)
            }
          />
          <div style={{ color: "red", marginBottom: "10px" }}>
            {form.descriptionError}
          </div>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => (isEditMode ? handleEditSubmit() : addToDo())}
          style={{ padding: "6px 25px" }}
        >
          {isEditMode ? "Save Changes" : "Add"}
        </Button>
        <br />
        <Link to="/showtasks">
          <Button
            variant="success"
            onClick={() => isEditMode && handleCloseEditModal()}
            style={{ marginTop: "10px" }}
          >
            {isEditMode ? "Close" : "View Todos"}
          </Button>
        </Link>
      </Form>
    </>
  );
};

export default TodoForm;
