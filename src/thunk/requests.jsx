import { addToDo, deleteTodo, readTodo, editTodo } from "../actions";
import axios from "axios";
import { BASE_API_URL } from "../utils/constant";
import { getTodos } from "../actions";

export const requestForTodo = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/data`);
    dispatch(getTodos(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestAddTodo = (data) => {
  try {
    return (dispatch) => {
    axios.post(`${BASE_API_URL}/data`, data).then((res)=> {
    const todo = res.data;
      dispatch(addToDo(todo));
    }); 
  }
}
  catch (err) {
    console.log(err);
  }
}

export const requestDeleteTodo = (id) => {
  try {
    return (dispatch) => {
       axios.delete(`${BASE_API_URL}/data/${id}`);
      // window.location.reload();
      dispatch(deleteTodo(id))
    } 
  }
  catch(err){
    console.log(err);
  }
}

export const requestEditTodo = (id, data) => {
  console.log(id, data, "From requests");
  try {
    return async (dispatch) => {
    const respose = await axios.put(`${BASE_API_URL}/data/${id}`, data);
    const updatedTodo = respose.data;
    window.location.reload();
    dispatch(editTodo(updatedTodo))
  }
}
    catch (err) {
    console.log(err);
  }
}
export const requestReadTodo = (id, data) => {
  try {
    return async (dispatch) => {
      const response = await axios.put(`${BASE_API_URL}/data/${id}`, data,{
        isRead: true,
      })
      const updatedTodo = response.data;
      console.log(updatedTodo,"ssssssssssss");
      dispatch(readTodo(updatedTodo))
    }
  }
  catch(err){
    console.log(err);
  }
}
