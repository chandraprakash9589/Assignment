import React, { useCallback, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Todoform(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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
    setForm((prevState) => ({ ...prevState, [names]: value }));
  };

  const handleUpdate = useCallback((index) => {
    const { list } = form;
    const editData = list[index];
    setForm({
      ...form,
      title: editData.title,
      desc: editData.desc,
      editMode: true,
      editIndex: index,
    });
  }, []);

  useEffect(() => {
    const { index } = props;
    if (index !== undefined && index !== null) {
      handleUpdate(index);
    }
  }, []);

  const handleValid = () => {
    const { err } = form;

    if (form.title === "") {
      err.title = "Required";
    } else {
      err.title = "";
    }
    if (form.desc === "") {
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
    const { title, list, editMode, editIndex } = form;
    if (handleValid()) {
      const data = {
        title: title,
        desc: form.desc,
      };
      if (editMode) {
        const updateList = [...list];
        updateList[editIndex] = data;
        setForm({
          editIndex: null,
          title: "",
          desc: "",
          err: {},
          isRedirect: true,
          list: updateList,
        });
        localStorage.setItem("todobyhook", JSON.stringify(updateList));
      } else {
        setForm({
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
              value={form?.title}
              onChange={handleChange}
            />
            {form.err.title && (
              <Form.Text style={{ color: "red" }}>{form.err.title}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              type="textarea"
              name="desc"
              value={form?.desc}
              onChange={handleChange}
            />
            {form.err.desc && (
              <Form.Text style={{ color: "red" }}>{form.err.desc}</Form.Text>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
      {form.isRedirect && navigate("/show")}
    </div>
  );
}

export default Todoform;
