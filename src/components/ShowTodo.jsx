import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ShowTodo(props) {
  const { data } = props;

  return (
    <>
      <div className="container">
        <Link to={"/"}>
          <Button className="btn btn-primary mt-3 m-2">Add new</Button>
        </Link>
        <Table
          className="text-center mt-5"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.list.title}</td>
                  <td>{item.list.description}</td>
                  <td className="text-center">
                    <>
                      <Button variant="secondary">Edit</Button>
                      <Button variant="danger">Remove</Button>
                      <Button variant="success">Done</Button>
                    </>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
