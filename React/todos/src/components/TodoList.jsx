import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      title: "learn redux",
      description: "learn redux from chai aur code",
      error: {},
    };
  }

  validateCheck = () => {
    const newError = {};
    let isValid = true;
    const { title, description } = this.state;

    if (title.trim() === "") {
      newError.title = "title Error";
      isValid = false;
    }
    if (description.trim() === "") {
      newError.description = "description Error";
      isValid = false;
    }
    this.setState({ error: newError });
    return isValid;
  };

  handleChange = (name, value) => {
    // const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      [`${name}Error`]: "",
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateCheck()) {
      const userData = {
        title: this.state.title,
        description: this.state.description,
      };

      console.log("userdata:", userData);

      const existingData = JSON.parse(localStorage.getItem("data")) || [];
      const updatedData = [...existingData, userData];
      localStorage.setItem("data", JSON.stringify(updatedData));
      // console.log("userdata",userData)
      this.setState({
        title: "learn React",
        description: "From youtube..",
      });

      document.getElementById("successmsg").innerHTML = "Successfully Added...";
    }
  };
  render() {
    const { title, description, error } = this.state;
    const {
      isEdit,
      updatedTitle,
      updatedDescription,
      onUpdate,

      handleInputChange,
    } = this.props;
    return (
      <>
        <div className="container mt-5 form1">
          <h1>Todos List</h1>
          <Form
            onSubmit={(e) => {
              isEdit ? onUpdate(e) : this.handleSubmit(e);
            }}
          >
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label className="mt-5">Title</Form.Label>
              <span>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    className="input1"
                    type="text"
                    placeholder="title"
                    aria-describedby="inputGroupPrepend"
                    name="title"
                    value={isEdit ? updatedTitle : title}
                    onChange={(e) =>
                      isEdit
                        ? handleInputChange("updatedTitle", e.target.value)
                        : this.handleChange("title", e.target.value)
                    }
                  />
                  <div style={{ color: "red" }}>{error.title}</div>
                </InputGroup>
              </span>
            </Form.Group>
            <br />
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Description</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="description"
                  aria-describedby="inputGroupPrepend"
                  name="description"
                  value={isEdit ? updatedDescription : description}
                  onChange={(e) =>
                    isEdit
                      ? handleInputChange("updatedDescription", e.target.value)
                      : this.handleChange("description", e.target.value)
                  }
                />
                <div style={{ color: "red" }}>{error.description}</div>
              </InputGroup>
            </Form.Group>

            <br />

            <br />
            <Button variant="primary" type="submit">
              {isEdit ? "Update" : "Add To-Do"}
            </Button>

            <p id="successmsg" style={{ color: "red" }}></p>

            {isEdit ? (
              ""
            ) : (
              <Link to={"/showTodo"}>
                <Button variant="primary">Show To-Do</Button>
              </Link>
            )}
          </Form>
        </div>
      </>
    );
  }
}
