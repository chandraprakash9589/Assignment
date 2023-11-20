import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import nodata from "../nodata.png";
import Spinner from "react-bootstrap/Spinner";
class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      completedItems: [],
      load: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: false });
    }, 2000);
  }

  handleCheck = (index) => {
    const { completedItems } = this.state;
    completedItems[index] = !completedItems[index];
    this.setState({ completedItems });
  };
  handleDelete = (index) => {
    const { list } = this.state;
    const newlist = [...list];
    newlist.splice(index, 1);
    this.setState({
      list: [...newlist],
    });
    localStorage.setItem("todoList", JSON.stringify(newlist));
  };

  render() {
    const { list, completedItems, load } = this.state;
    if (list.length <= 0) {
      return <div>
      <Image
        src={nodata}
        rounded
        style={{ height: "400px", marginLeft: "400px" }}
      />
    </div>;
    } else {
      return (
        <div>
          {
            load ? (
              <Spinner
                animation="border"
                variant="primary"
                style={{ marginTop: "250px", marginLeft: "600px" }}
              />
            ) : (
              <Table striped bordered hover style={{ marginTop: "40px" }}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Update</th>
                    <th>Delete</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>
                        <Link to="/">
                          <Button
                            variant="success"
                            size="sm"
                            style={{ marginRight: "8px" }}
                            onClick={() => this.props.handleUpdate(index)}
                          >
                            Update
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          style={{ marginRight: "8px" }}
                          onClick={() => this.handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          style={{ marginLeft: "10px" }}
                          checked={completedItems[index] || false}
                          onChange={() => this.handleCheck(index)}
                        />
                        <span style={{ color: "green" }}>
                          {" "}
                          {completedItems[index] ? "complete" : ""}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
          // )  (
          //   <div>
          //     <Image
          //       src={nodata}
          //       rounded
          //       style={{ height: "400px", marginLeft: "400px" }}
          //     />
          //   </div>
          }
        </div>
      );
    }
  }
}

export default Todolist;
