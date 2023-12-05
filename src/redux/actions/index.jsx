import axios from "axios";
import { BASE_API_URL } from "../../utils/constants";

export const addRequest =(users)=>{
  return{
    type: 'REGISTER_USER',
    payload: users
  }
}

export const registerUser = (data) => {
  console.log(data, "i am data from actions");
  const { Email, Password } = data
  return (dispatch) => {
    axios.post(`${BASE_API_URL}/users`, {Email, Password}).then((res) => {
      const users = res.data;
      dispatch(addRequest(users));
    });
  };
};
