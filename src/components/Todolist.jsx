import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
function Todolist(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todobyhook")) || []
  );

  const handleDelete = (index) => {
    const deList = [...data];
    deList.splice(index, 1);
    setData(deList);
    localStorage.setItem("todobyhook", JSON.stringify(deList));
  };

  if (data.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Desc</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((v, index) => {
                return (
                  <tr key={index}>
                    <td>{v?.title}</td>
                    <td>{v.desc}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Link to="/">
                        <Button
                          variant="primary"
                          onClick={() => {
                            props.handleUpdate(index);
                          }}
                        >
                          Update
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Empty list</h1>
    );
  }
}

export default Todolist;
