const initialData = {
  list: [],
};
const todoReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { list: action.data }];

    // case "REMOVE_TODO":
    //   return state.slice(0, -1);
    // case "REMOVE_TODO":
    //   return state.filter((item, index) => index !== state.length - 1);
      case "REMOVE_TODO":
        return state.filter((item, index) => index !== action.payload);
      
    case "DONE_TODO":
      return state.map((item, index) => {
        if (index === action.payload) {
          return { ...item, read: !item.read };
        }
        return item;
      });
    default:
      return state;
  }
};

export default todoReducers;
