import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      editIndex : null
    };
  }
  

 
 
  handleUpdate = (index) => {
    this.setState({
      editIndex: index,
    });  
   
  };
  

  render() {
    return (
      <div>
        <Navbar className="bg-dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Todo App</Navbar.Brand>
            <Nav className="me-auto" style={{marginLeft:"20px"}}>
            <Nav.Link href="/">Add Todo</Nav.Link>
            <Nav.Link href="/show">View Todo</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={<TodoForm  editIndex={this.state.editIndex}  handleUpdate = {this.handleUpdate} />}
          />
          <Route
            path="/show"
            element={<Todolist handleUpdate={this.handleUpdate}   />}
          />
        </Routes>
      </div>
    );
  }
}

export default App