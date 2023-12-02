import React, { useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Todoform(props) {
  const navigate = useNavigate();
  const [name, setName] = useState({
    title: "",
    desc: "",
    err: {},
    isRedirect: false,
    list: JSON.parse(localStorage.getItem("todobyhook")) || [],
    editIndex: null,
    editMode: false,
  });

  const handleChange = (e) => {
    const names = e.target.name;
    const value = e.target.value;
    setName((prevState) => ({ ...prevState, [names]: value }));
  };

  useEffect(() => {
    const { index } = props;
    if (index !== undefined && index !== null) {
      handleUpdate(index);
    }
  }, [props.index]);

  const handleUpdate = (index) => {
    const { list } = name;
    const editData = list[index];
    setName({
      ...name,
      title: editData.title,
      desc: editData.desc,
      editMode: true,
      editIndex: index,
    });
  };

  const handleValid = () => {
    const { err } = name;

    if (name.title === "") {
      err.title = "Required";
    } else {
      err.title = "";
    }
    if (name.desc === "") {
      err.desc = "Required";
    } else {
      err.desc = "";
    }
    let valid = true;
    Object.values(err).forEach((v) => {
      v.length > 0 && (valid = false);
    });
    return valid;
  };
  handleValid();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, list, editMode, editIndex } = name;
    if (handleValid()) {
      const data = {
        title: title,
        desc: name.desc,
      };
      if (editMode) {
        const updateList = [...list];
        updateList[editIndex] = data;
        setName({
          editIndex: null,
          title: "",
          desc: "",
          err: {},
          isRedirect: true,
          list: updateList,
        });
        localStorage.setItem("todobyhook", JSON.stringify(updateList));
      } else {
        setName({
          title: "",
          desc: "",
          err: {},
          isRedirect: true,
          list: [...list, data],
        });
        localStorage.setItem("todobyhook", JSON.stringify([...list, data]));
      }
    }
  };

  return (
    <div>
      <Card
        style={{
          width: "30rem",
          marginLeft: "400px",
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasictitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={name?.title}
              onChange={handleChange}
            />
            {name.err.title && (
              <Form.Text style={{ color: "red" }}>{name.err.title}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              type="textarea"
              name="desc"
              value={name?.desc}
              onChange={handleChange}
            />
            {name.err.desc && (
              <Form.Text style={{ color: "red" }}>{name.err.desc}</Form.Text>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
      {name.isRedirect && navigate("/show")}
    </div>
  );
}

export default Todoform;
