import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button,Image } from "react-bootstrap";
import nodata from "../nodata.png";

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
      <div>
      <Image
        src={nodata}
        rounded
        style={{ height: "400px", marginLeft: "400px" }}
      />
    </div>
    );
  }
}

export default Todolist;
