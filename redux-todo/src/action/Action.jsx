import axios from "axios"

export const fetchRequest = () =>{
  return {
    type : "fetchRequest"
  }
}
export const fetchSuccess = (todo) =>{
  return {
    type : "fetchSucces",
    payload : todo
  }
}




export const addTodo=(data)=>{
  return{
    type : 'addTodo',
    todos: data
  }
}

 export const fetchTodo = () =>{

  return (dispatch)=>{
    dispatch(fetchRequest)
    axios.get('https://dummyjson.com/todos')
    .then(res=>{
      const todo = res.todos
      dispatch(fetchSuccess(todo))
      console.log(res,todo)
    })
  }
}

