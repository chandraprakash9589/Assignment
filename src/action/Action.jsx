import axios from "axios";

export const fetchRequest = () => {
  return {
    type: "fetchRequest",
  };
};
export const fetchSuccess = (todo) => {
  return {
    type: "fetchSuccess",
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

export const update = (id, data) => {
  console.log(data,"--------------------")
  return (dispatch) => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`,{title: data.title}) 
      .then((res) => {
        const updatedTodo = res.data;  
        console.log(updatedTodo)
        dispatch({ type: "update", payload: updatedTodo, index: id }); 
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const AddTodo = (todo) => {
  console.log(todo,'addddd')
  return  (dispatch) => {
   
    axios.post('https://jsonplaceholder.typicode.com/posts',{todo}).then((res) => {
      const todos = res.data;
      const newdata = {
        title:todos.todo.title,
      }
      dispatch({ type: "addTodo", payload: newdata ,id : todos.id });
      console.log(todos.todo,"dat")
    })
    .catch((err)=>{
      console.log(err)
    })
  
}
};

export const fetchTodo = () => {
  return (dispatch) => {
    dispatch(fetchRequest);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const todo = res.data;
      dispatch(fetchSuccess(todo));
    });
  };
};
