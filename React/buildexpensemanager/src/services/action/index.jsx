import axios from "axios";
export const register = (data) => {
  axios.post("http://localhost:3000/users",data)
  .then((response)=>{
    console.log("response:",response.data);
  })
  .catch((error)=>{
    console.log("error:",error)
  })
  return {
    type: "REGISTER",
    data: data,
  };
};
export const addExpense = (data) => {
  axios.post("http://localhost:3000/expenses",data)
  .then((response)=>{
    // console.log("response:",response.data);
  })
  .catch((error)=>{
    console.log("error:",error)
  })
  return {
    type: "ADD_EXPENSE",
    data: data,
  };
};

export const login = (data) => {
  // axios.get("http://localhost:3000/users")
  // .then((response)=>{
  //   console.log("response:",response);
  // })
  // .catch((error)=>{
  //   console.log("error:",error)
  // })
  return {
    type: "LOGIN",
    data: data
  }
}

export const removeExpense = (index) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const expenseId = state.expenseReducer[index].id;
      await axios.delete(`http://localhost:3000/expenses/${expenseId}`);

      dispatch({
        type: "REMOVE_EXPENSE",
        payload: index,
      });
    } catch (error) {
      console.error("Error Removing Expense:", error)
    }
  };
};