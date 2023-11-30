import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function TodoList(props) {
  const [title, setTitle] = useState("learn redux");
  const [description, setDescription] = useState(
    "From youtube we will learn redux..."
  );

  return (
    <>
      <div className="container">
        <h1 className="mt-5">To-Do Form</h1>
        <Form>
          <Form.Group>
            <Form.Label className="mt-5">Title</Form.Label>
            <InputGroup className="mb-4">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Title"
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Description"
                type="text"
                name="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              onClick={() =>
                props.addTodoHandler(
                  { title: title, description: description },
                  setTitle(""),
                  setDescription("")
                )
              }
            >
              Add{" "}
            </Button>
          </Form.Group>
          <Form.Group>
            <Link to={"/Show Todo"}>
              <Button>Show To-do </Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
