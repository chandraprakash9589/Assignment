const initialData = {
  list: [],
};
const todoReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { list: action.data }];
    default:
      return state;
  }
};

export default todoReducers;
