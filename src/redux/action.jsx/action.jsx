import axios from "axios"
import { BASE_API_URL } from "../../utils/constants"

export const addRequset =(users)=>{
  return{
    type: 'addUser',
    user : users
  }
}
export const userSucces = (users)=>{
  return {
    type : 'showuser',
    payload : users
  }
}

export const addUser = (data)=>{
 return (dispatch)=>{
  axios.post(`${BASE_API_URL}/user`,data).then((res)=>{
  const users = res.data
  dispatch(addRequset(users))
  })
 }
}

export const fetchrequest = ()=>{
  return {
    type : 'fetchuser'
  }
}
export const LoginRequest=(logindata)=>{
  console.log(logindata)
  return{
    type : 'login',
    payload : logindata
  }
}

export const fetchUser = (data)=>{
  return (dispatch)=>{
    dispatch(fetchrequest)
   axios.get(`${BASE_API_URL}/user`).then((res)=>{
   const users = res.data
   dispatch(userSucces(users))
   })
  }
 }

//  expense start

export const fetchexp = ()=>{
  return{
    type  : 'fetchexpense',
  
  }
}

export const expensesuccess = (data)=>{
  return {
    type : "expensesucees",
    payload : data
  }
}

export const addexpense = (data)=>{
  return{
    type  : 'addexpense',
    payload : data
  }
}

export const deleteexpense = (id)=>{
  return {
    type : 'deleteexpense',
    payload : id
  }
}

export const updateexpense = (id)=>{
  return {
    type : 'updateexpense',
    payload : id
  }
}

export const expenseSearch = (data)=>{
   return {
    type : "search",
    payload : data
   }
}

export const expenseSearchType = (data)=>{  
  return {
   type : "searchType",
   payload : data
  }
}

export const expenseSearchYear = (data)=>{ 
  return {
   type : "searchYear",
   payload : data
  }
}