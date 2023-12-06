const initialData = {
  users: [],
};
const userReducer = (state = [], action) => {
  switch (action.type) {
    case "REGISTER":
      const list = { users: action.data }
      return [...state,list ];
      
      default:
        return state;
      }
};

export default userReducer;
