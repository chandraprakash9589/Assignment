import React, { Component } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
export class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check : '',
    };
  }
  handleCheck = ()=>{
    this.setState({check:' todo has been completed'})
  }
  render() {
    const { item, deleteItem, updateItem } = this.props;
    return (
      <div>
        {item.map((listItem, i) => {
          return (
            <ListGroup as="ol" key={i}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold"style={{color:'blue'}}>  {listItem.title}</div>
                  {listItem.desc} <br/>
                 <span style={{color:'green'}}> {this.state.check}</span>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ marginRight: "0px" }}
                  onClick={() => {
                    deleteItem(i);
                  }}
                >
                  delete
                </Button>
                <Button
                className="btn-update"
                  variant="danger"
                  size="sm"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    updateItem(i, listItem.title);
                  }}
                >
                  update
                </Button>
                <Form.Check type="checkbox" style={{ marginLeft: "10px" }}  onClick={this.handleCheck}/>
              </ListGroup.Item>
            </ListGroup>
          );
        })
        }
        </div>
        )
  }
}

export default Todolist;
