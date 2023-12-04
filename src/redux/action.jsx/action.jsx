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

export const fetchUser = (data)=>{
  return (dispatch)=>{
    dispatch(fetchrequest)
   axios.get(`${BASE_API_URL}/user`).then((res)=>{
   const users = res.data
   dispatch(userSucces(users))
   })
  }
 }