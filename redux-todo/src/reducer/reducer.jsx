const initialData = {
  todos: [],
  loading: false,
  error: "",
};

export default function todoReducer(state = initialData, action) {
  switch (action.type) {
    case "fetchRequest":
      return { 
        ...state,
        loading:true
       };
    case "fetchSuccess":
      return { 
          loading:false,
          todo : action.payload
         };
    default:
      return {...state};
  }
}
