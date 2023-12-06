const initialData = {
  list: [],
};
const todoReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { list: action.data }];
    
    case "GET_TODO":
      return action.data;

    case "REMOVE_TODO":
      return state.filter((item, index) => index !== action.payload);

    case "DONE_TODO":
      return state.map((item, index) => {
        if (index === action.payload) {
          return { ...item, read: true };
        }
        return item;
      });

    case "EDIT_TODO":
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, ...action.payload.newData };
        }
        return item;
      });

    default:
      return state;
  }
};

export default todoReducers;
