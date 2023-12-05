 import axios from "axios"
 import { BASE_API_URL } from "../utils/constants"
 import { expensesuccess, fetchexp } from "../redux/action.jsx/action"
 import { addexpense,deleteexpense} from "../redux/action.jsx/action"

 export const fetchExpense =  () =>{
  return async (dispatch)=>{
    dispatch(fetchexp)
     try{
     await axios.get(`${BASE_API_URL}/expense`).then((res)=>{
        const data = res.data
        dispatch(expensesuccess(data))
      })
     }
     catch(err){
      console.log(err)
     }
  }
 }

 export const addExpense =  (data)=>{
    return async (dispatch)=>{
       try{
       await axios.post(`${BASE_API_URL}/expense`,data).then((res)=>{
         console.log(res)
         const data = res.data
         dispatch(addexpense(data))
        })
       }
       catch(err){
        console.log(err)
       }
    }
 }

 export const expenseDelete = (id)=>{
  return (dispatch)=>{
    try{
        axios.delete(`${BASE_API_URL}/expense/${id}`).then((res)=>{
          dispatch(deleteexpense(id))
        })
    }catch(err){
      console.log(err)
    }
  }
 }

 export const expenseUpdate = (id,form)=>{
  console.log(id,form)
  return (dispatch)=>{
    try{
        axios.put(`${BASE_API_URL}/expense/${id}`,form).then((res)=>{
          // dispatch(updateexpense(id))
          console.log(res)
        })
    }catch(err){
      console.log(err)
    }
  }
 }

