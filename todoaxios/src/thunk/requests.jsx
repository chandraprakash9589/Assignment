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
       axios.delete(`${BASE_API_URL}/data/${+id}`);
      // window.location.reload();
      dispatch(deleteTodo(id))
    } 
  }
  catch(err){
    console.log(err);
  }
}

// export const requestReadTodo = (id) => {
//   try {
//     return (dispatch) => {

//     }
//   }
// }
