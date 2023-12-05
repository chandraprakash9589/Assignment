const initialData = {
  users:[]
}
const usersReducer = (state=initialData, action) => {
  console.log(action.payload,"i am payload from reducers");
  switch(action.type){
    case "REGISTER_USER":
      const {Email, Password} = action.payload
      
      return{
        ...state,
        users:[
          ...state.users,
          {
            email: Email,
            password: Password
          }
        ]
      }
      default:
        return state;
  }
}

export default usersReducer