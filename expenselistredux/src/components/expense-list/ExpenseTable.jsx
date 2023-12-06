import React from "react";
import { Button, Table } from "react-bootstrap";

const ExpenseTable = () => {
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th className="heading">#</th>
            <th className="heading">Expense Type</th>
            <th className="heading">Expense Date</th>
            <th className="heading">Expense Amount</th>
            <th className="heading">Description</th>
            <th className="heading">Edit</th>
            <th className="heading">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>card</td>
            <td>Oct 5, 2023</td>
            <td>$4,500</td>
            <td>Shoes</td>
            <td>
              <Button variant="primary" style={{ marginRight: "10px" }}>
                Edit
              </Button>
            </td>
            <td>
              <Button variant="danger" style={{ marginRight: "10px" }}>
                Delete
              </Button>
            </td>
          </tr>
          <tr>
          <td>2</td>
            <td>card</td>
            <td>Oct 8, 2023</td>
            <td>$5,500</td>
            <td>Shopping</td>
            <td>
              <Button variant="primary" style={{ marginRight: "10px" }}>
                Edit
              </Button>
            </td>
            <td>
              <Button variant="danger" style={{ marginRight: "10px" }}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ExpenseTable;
