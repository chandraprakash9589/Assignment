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

export const update = (id, todo) => {
  return (dispatch) => {
    axios
      .put(`https://dummyjson.com/products/${id}`,{ todo }) 
      .then((res) => {
        const updatedTodo = res.data;  
        dispatch({ type: "update", payload: todo, index: id }); 
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const AddTodo = (todo) => {
  console.log(todo,'addddd')
  return  (dispatch) => {
   
    axios.post('https://dummyjson.com/products',{todo}).then((res) => {
      const todos = res.data.todos;
      dispatch({ type: "addTodo", payload: todos });
      console.log(todos)
    })
    .catch((err)=>{
      console.log(err)
    })
  
}
};

export const fetchTodo = () => {
  return (dispatch) => {
    dispatch(fetchRequest);
    axios.get("https://dummyjson.com/products").then((res) => {
      const todo = res.data.products;
      console.log(res.data.products)
      dispatch(fetchSuccess(todo));
    });
  };
};
