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
    const id = e.target.id;
    const value = e.target.value;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleUpdate = (index) => {
    const { list } = form;
    const editData = list[index];
    setForm({
      ...form,
      title: editData?.title,
      desc: editData?.desc,
      editMode: true,
      editIndex: index,
    });
  }

  useEffect(() => {
    const { index } = props;
    if (index !== undefined && index !== null) {
      handleUpdate(index);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, list, editMode, editIndex } = form;
  
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
    
  };
  useEffect(()=>{
    if(form.isRedirect === true){
      navigate("/show")
    }
  })

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
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id = "title"
              value={form?.title}
              onChange={handleChange}
            />
            
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              type="textarea"
              id = "desc"
              value={form?.desc}
              onChange={handleChange}
            />
           
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Todoform;
