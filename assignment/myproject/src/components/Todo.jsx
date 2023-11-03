import React, { Component } from 'react'

export class Todo extends Component {
  constructor({todo,Addtodo}){
    super()
  }
  render() {
    return (
      <div>
        <h1>Todo</h1>
        {/* {this.todo.map((todos,index)=>{
          return <p key={index}>{todos}</p>
        })} */}
        <button onClick={this.Addtodo}>Add Todo</button>
      </div>
    )
  }
}

export default Todo
