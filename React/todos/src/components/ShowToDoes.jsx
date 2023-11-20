import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal';
import Todos from "./TodoList";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
export default class ShowToDoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("data")) || [],
      editingIndex: -1,
      updatedTitle: "",
      updatedDescription: "",
      isOpen: false,
      isRead:false,
      
    };
  }

  openModal = (index) => {
    this.setState({
      isOpen: true,
      updatedTitle:this.state.data[index].title,
      updatedDescription:this.state.data[index].description,
      editingIndex:index,
    });
} 

  closeModal = () => {
    this.setState({
      isOpen: false,
      updatedTitle: "",
      updatedDescription : "",
      editingIndex : null,
    });
  }

  handleRemoveClick = (index) => {
    if (window.confirm("Are you sure you want to remove this todo?")) {
      const updatedData = [...this.state.data];
      // console.log("index",index)
      // console.log("updatedData",updatedData)
      updatedData.splice(index, 1);
      this.setState({ data: updatedData });
    }
  };

  handleMarkAsReadClick = (index) => {
    const updatedData = [...this.state.data];
    updatedData[index].isRead = true;
    this.setState({ data: updatedData });
  };

  handleInputChange = (name,value) => {
    // const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  back = ()=>{
    this.props.onSubmit();
    // window.history.pushState(null,null,"/")
  }

  handleUpdate = (event)=>{
    event.preventDefault()
  
    const {editingIndex,updatedTitle,updatedDescription}= this.state;
    if (updatedTitle.trim() === "" || updatedDescription.trim() === "") {
      alert("Title and description cannot be empty");
      return;
    }
    const updatedData = [...this.state.data];
    // history.pushState(null,null,"/showtodo")
    updatedData[editingIndex] = {
      ...updatedData[editingIndex],
      title:updatedTitle,
      description:updatedDescription
    };
    localStorage.setItem("data", JSON.stringify(updatedData));
    this.setState({ data: updatedData});
    console.log("updatedData",updatedData)
  };
  


  render() {
    const data = this.state.data || [];
    const { userData } = this.props;
    const { editingIndex, updatedTitle, updatedDescription } = this.state;
    return (
      <>
      <Link to={'/'}>
      <button
          onClick={this.back}
          type="button"
          className="btn btn-secondary mt-2 m-2"
        >
          &#8592; Back
        </button>
      </Link>
        <h2 className="text-center mt-5">Show To-Do List</h2>
        <Table className="text-center mt-4" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th className="">Description</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  
                    <span style={item.isRead ? styles.read : null}>
                      {item.title}
                    </span>
                  
                </td>
                <td>
                    <span style={item.isRead ? styles.read : null}>
                      {item.description}
                    </span>
                </td>
                <td className="text-center">
                    <>
                      <Button
                        variant="secondary"
                        onClick={() => this.openModal(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => this.handleRemoveClick(index)}
                      >
                        Remove
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => this.handleMarkAsReadClick(index)}
                      >
                        Done
                      </Button>
                    </>  
                </td>
              </tr>
            ))}
          </tbody>
          <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit To-Do</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Todos
                isEdit = {this.state.isOpen}
                updatedTitle = {this.state.updatedTitle}
                updatedDescription={this.state.updatedDescription}
                editingIndex = {this.state.editingIndex}
                handleInputChange={this.handleInputChange} 
                onUpdate={this.handleUpdate} 
                />
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </Table>
      </>
    );
  }
}

const styles = {
  
  read: {
    color: "gray",
    fontStyle: "italic",
    // backgroundColor: 'green',
  },
};