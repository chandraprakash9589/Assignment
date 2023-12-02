import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, fetchTodo } from "../action/Action";
import { update,AddTodo } from "../action/Action";
import { useDispatch } from "react-redux";
import { Table, Button, Spinner, Form, Modal } from "react-bootstrap";
function Todolist({ todo },props) {
  const dispatch = useDispatch();
  const [updateTodo, setupdateTodo] = useState("");
  const [isRequired, setIsrequired] = useState(false);
  const [editIndex, setEditindex] = useState(null);
  const [addTodo,setaddTodo] = useState(false)

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const handleDelete = (key) => {
    console.log(key,'');
    dispatch(deleteTodo(key));
  };
  const handleUpdate = (key) => {
    console.log(key,'updaedsss');
    // const list = todo.todos;
    // const editData = list[key - 1];
    // setupdateTodo(editData.todo);
    setIsrequired(true);
    setEditindex(key);
  };

  const onAddtodo = ()=>{
    setIsrequired(true)
    setaddTodo(true)
    console.log("addd")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsrequired(false);
    console.log(editIndex,)
    if(addTodo === true){
      const todo = {title:updateTodo}
      dispatch(AddTodo(todo));
      console.log("add")
    }
    else{
      const newTodo = { title: updateTodo, id: editIndex };
      console.log(updateTodo,'editIndex')
      dispatch(update(editIndex, newTodo));
    }
  };
  return (
    <div>
        <Button variant="dark" style={{margin:"20px"}} onClick={onAddtodo}>AddTodo</Button>
      {isRequired ? (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header >
              <Modal.Title>UPDATE</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={updateTodo}
                    onChange={(e) => {
                      setupdateTodo(e.target.value);
                    }}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      ) : todo.loading ? (
        <Spinner
          animation="border"
          variant="primary"
          style={{ marginTop: "100px" }}
        />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Todo</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todo.todos.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td>{val?.id}</td>
                  <td>{val?.title}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(val.id)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(val.id)}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todo: state.todos,
  };
};

export default connect(mapStateToProps)(Todolist);
