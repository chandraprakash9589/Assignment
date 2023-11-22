import React, { useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Todoform(props) {
  const navigate = useNavigate();
  const [name, setName] = useState({
    title: "",
    desc: "",
    err: {},
    edit: false,
    isRedirect: false,
    list: JSON.parse(localStorage.getItem("todobyhook")) || [],
    editIndex: null,
    editMode: false,
  });


  const handleChange = (e) => {
    const names = e.target.name;
    const value = e.target.value;
    console.log('-------',names,value )
    setName({ ...name, [names]: value });
    console.log(name.err);
  };
  useEffect(() => {
    const { index } = props;
    if (index !== undefined && index !== null) {
      handleUpdate(index);
    }
  }, [name]);

  const handleUpdate = (index) => {
  
    const { list } = name;

    if (index !== undefined && index !== null) {
      const editData = list[index];
   
      // setName({
      //   editMode : true
      // });
      // const { title } = name;
      if (name.title !== undefined) {
        console.log("handleUpdate---------", editData.title);
        // setName({title: editData.title,});
        setName({ ...name, 'title': editData.title ,'desc' : editData.desc});
      }

      console.log(name, "nt");
    }
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

    console.log(err);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, list } = name;
    e.preventDefault();
    const data = {
      title: title,
      desc: name.desc,
    };
    list.push(data);

    setName({
      title: "",
      desc: "",
      err: {},
      isRedirect: true,
    });
    localStorage.setItem("todobyhook", JSON.stringify(name.list, data));
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
            {/* operator chaining => name && name.title? name.title: "" */}
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={name?.title}
              onChange={handleChange}
            />
            {console.log('------name.title', name.title)}
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
