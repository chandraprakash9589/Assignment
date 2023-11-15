import { Component } from "react";
import React from "react";
import TodoForm from "./components/TodoForm";
import { Navbar, Container } from "react-bootstrap";
import Todolist from "./components/Todolist";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  handleList = (inputData) => {
    this.setState({ list: [...this.state.list, inputData] });
  };
  deleteItem = (key) => {
    let newList = [...this.state.list];
    newList.splice(key, 1);
    this.setState({ list: [...newList] });
  };
  updateItem = (key, title) => {
    console.log(title, key);
    const todos = [...this.state.list]; 
    const editedTodo = prompt('Edit the todo title'); 
    const editedTododesc = prompt('Edit the todo desc'); 

    if (editedTodo !== null && editedTodo.trim() !== '') { 
      let updatedTodos = [...todos] 
      updatedTodos[key].title= editedTodo 

      this.setState({ 
        list: updatedTodos, 
    }); 
    
    } 
    if (editedTododesc !== null && editedTododesc.trim() !== '') { 
      let updatedTodos = [...todos] 
      updatedTodos[key].desc = editedTododesc 

      this.setState({ 
        list: updatedTodos, 
    }); 
    
    } 
  };
  render() {
    return (
      <div>
        <Navbar className="bg-dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          </Container>
        </Navbar>
        <TodoForm handleList={this.handleList} 
/>
        <Todolist
          item={this.state.list}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />

      
      </div>
    );
  }
}

export default App;
