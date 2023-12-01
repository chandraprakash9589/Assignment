const initialData = {
  todos: [],
  loading: true,
  error: "",
};

export default function todoReducer(state = initialData, action) {
  
  switch (action.type) {
    case "fetchRequest":
      return {
        ...state,
        loading: true,
      };
   case "delete":
    return {
      todos: state.todos.filter((todo) =>  todo.id !== action.payload)
    };
    case "update":
      const todo  = [...state.todos]
      console.log(action.index,'todo')
      const todoIndex = todo.findIndex(todo=>todo.id === action.index)
      todo[todoIndex] = action.payload
      return {
       ...state,
      todos:todo
      }
    case "fetchSuccess":
      return {
        loading: false,
        todos: action.payload,
      };
    default:
      return { ...state };
  }
}
