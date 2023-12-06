import axios from 'axios';

export const addTodo = (data) => {
  axios.post("http://localhost:3000/todos",data)
  .then((response)=>{
    console.log("response:",response)
  })
  .catch((error)=>{
    console.log("Error:",error)
  })
  return {
    type: "ADD_TODO",
    data: data,
  };
};

export const getTodo = (data) => {
  return {
    type: "GET_TODO",
    data: data,
  };
};

export const fetchTodo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      dispatch(getTodo(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const removeTodo = (index) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const todoId = state.todoReducers[index].id;
      // console.log("Todo Item:", todoId);
      // const todoId = todoItem.id; 
      await axios.delete(`http://localhost:3000/todos/${todoId}`);
      
      dispatch({
        type: "REMOVE_TODO",
        payload: index,
      });
    } catch (error) {
      console.error("Error removing data:", error);
    }
  };
};

export const doneTodo = (index) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const todoId = state.todoReducers[index].id;
      await axios.patch(`http://localhost:3000/todos/${todoId}`, { read: true });
      dispatch({
        type: "DONE_TODO",
        payload: index,
      });
    } catch (error) {
      console.error("Error marking as done:", error);
    }
  };
};


export const editTodo = (index, newData) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const todoId = state.todoReducers[index].id;
      await axios.put(`http://localhost:3000/todos/${todoId}`, newData);
      dispatch({
        type: "EDIT_TODO",
        payload: { index, newData },
      });
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };
};
