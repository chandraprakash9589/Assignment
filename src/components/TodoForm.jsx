import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { addToDo, editTodo } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TodoForm = (props) => {

  const {
    isEditMode,
    editedTitle,
    editedDescription,
    editedIndex,
    handleCloseEditModal,
    handleEditInputChange,
  } = props;

  const [form, setForm] = useState({
    title: "",
    description: "",
    titleError: "",
    descriptionError: "",
  });

  const dispatch = useDispatch()
  const updateInput = (id, value) => {
    setForm((prevForm) => ({ ...prevForm, [id]: value, [`${id}Error`]: "" }));
  };
  return (
    <div>
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
            onChange={(e) =>isEditMode
              ? handleEditInputChange("editedTitle", e.target.value)
              : updateInput(e.target.id, e.target.value)}
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
            onChange={(e) => isEditMode
              ? handleEditInputChange("editedDescription", e.target.value)
              : updateInput(e.target.id, e.target.value)}
          />
          <div style={{ color: "red", marginBottom: "10px" }}>
            {form.descriptionError}
          </div>
        </Form.Group>
        <Button
          variant="primary"
          onClick={()=> {if (isEditMode) {
            dispatch(editTodo({
              editedTitle: editedTitle,
              editedDescription: editedDescription,
              editedIndex: editedIndex,
            }));
            handleCloseEditModal();
          } else {
            dispatch(addToDo(form));
            setForm({
              title: "",
              description: "",
              titleError: "",
              descriptionError: "",
            });
          }}}
          style={{ padding: "6px 25px" }}
        >
          {isEditMode ? "Save Changes" : "Add"}
        </Button>
        <br />
        <Link to="/showtodos">
        <Button
            variant="success"
            style={{ marginTop: "10px" }}
            onClick={() => isEditMode && handleCloseEditModal()}
          >
            {isEditMode ? "Close" : "View Todos"}
          </Button>
        </Link>
      </Form>
    </>
    </div>
  )
}

export default TodoForm