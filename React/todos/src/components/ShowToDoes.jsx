import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
export default class ShowToDoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingIndex: -1,
      updatedTitle: "",
      updatedDescription: "",
    };
  }
  handleEditClick = (index) => {
    const { title, description } = this.props.userData[index];
    // console.log("index",index)
    this.setState({
      editingIndex: index,
      updatedTitle: title,
      updatedDescription: description,
    });
  };

  handleUpdateClick = () => {
    const { editingIndex, updatedTitle, updatedDescription } = this.state;
    if (updatedTitle.trim() === "" || updatedDescription.trim() === "") {
      alert("Title and description cannot be empty");
      return;
    }
    if (this.props.onUpdate) {
      this.props.onUpdate(editingIndex, updatedTitle, updatedDescription);
    }
    this.setState({
      editingIndex: -1,
      updatedTitle: "",
      updatedDescription: "",
    });
  };

  handleRemoveClick = (index) => {
    if (window.confirm("Are you sure you want to remove this todo?")) {
      if (this.props.onRemove) {
        this.props.onRemove(index);
      }
    }
  };

  handleMarkAsReadClick = (index) => {
    if (this.props.onMarkAsRead) {
      this.props.onMarkAsRead(index);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  back = ()=>{
    this.props.onSubmit();
    // window.history.pushState(null,null,"/")
  }

  render() {
    const { userData } = this.props;
    const { editingIndex, updatedTitle, updatedDescription } = this.state;

    console.log('TESTTTTTTs')
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
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="updatedTitle"
                      value={updatedTitle}
                      onChange={this.handleInputChange}
                    />
                  ) : (
                    <span style={item.isRead ? styles.read : null}>
                      {item.title}
                    </span>
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="updatedDescription"
                      value={updatedDescription}
                      onChange={this.handleInputChange}
                    />
                  ) : (
                    <span style={item.isRead ? styles.read : null}>
                      {item.description}
                    </span>
                  )}
                </td>
                <td className="text-center">
                  {editingIndex === index ? (
                    <Button variant="success" onClick={this.handleUpdateClick}>
                      Update
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="secondary"
                        onClick={() => this.handleEditClick(index)}
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
                  )}
                </td>
              </tr>
            ))}
          </tbody>
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
