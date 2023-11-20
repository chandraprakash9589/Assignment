import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      editMode: false,
      editIndex: null,
      isRedirect : false,
      err : {},
      list: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  }
  componentDidMount() {
    const { editIndex } = this.props;

    if (editIndex !== undefined && editIndex !== null) {
      this.handleUpdate(editIndex);
    }
  
  }


  handleUpdate = (index) => {
    const { list } = this.state;
    if (index !== undefined && index !== null) {
      const editData = list[index];
      console.log(index);
      console.log(editData, "f");
      this.setState({
        title: editData.title,
        desc: editData.desc,
        editIndex: index,
        editMode: true,
      });
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  Formvalid = ()=>{
    const {title,desc,err} = this.state
     if(title === ""){
      err.title = "Required"
     }
     else{
      err.title = ""
     }
     if(desc === ""){
      err.desc = "Required"
     }
     else{
      err.desc = ""
     }
     this.setState({err})
     let valid = true
    Object.values(err).forEach((v)=>{
      v.length> 0 && (valid = false)
    })
    return valid
    
  }

  handleSubmit = (e) => {
    const { title, desc, editMode, editIndex, list } = this.state;

    e.preventDefault();
    const data = {
      title: title,
      desc: desc,
    };
    if(this.Formvalid()){
    if (editMode) {
      const updatedList = [...list];
      updatedList[editIndex] = data;
      this.setState({
        list: updatedList,
        title: "",
        desc: "",
        isRedirect  : true,
        editMode: false,
        editIndex: null,
      });
      localStorage.setItem("todoList", JSON.stringify([...updatedList]));
    } else {
      this.setState({
        list: [...list, data],
        title: "",
        desc: "",
        isRedirect  : true,
      });
      localStorage.setItem("todoList", JSON.stringify([...list, data]));
    }}
     
  };

  render() {
    const { title, desc, editMode,isRedirect,err } = this.state;

    return (
      <div>
        <Form
          style={{ width: "500px", marginLeft: "400px", marginTop: "10px" }}
        >
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              name="title"
              value={title}
              onChange={this.handleChange}
              className="bg-secondary"
              style={{ color: "white" }} required
            />
            <p style={{color : "red"}}>{err.title}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              value={desc}
              onChange={this.handleChange}
              className="bg-secondary"
              style={{ color: "white" }}
             
            />
             <p style={{color : "red"}}>{err.desc}</p>
            <Button
              variant="success"
              size="lg"
              style={{ marginTop: "8px" }}
              onClick={this.handleSubmit}
            >
              {editMode ? "Update" : "Add"}
            </Button>
            {isRedirect && <Navigate to="/show"/>}
            
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default TodoForm;