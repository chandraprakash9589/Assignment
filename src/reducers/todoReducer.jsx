const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        list: action.payload,
      };

    case "ADD_TODO":
      console.log(action.payload, "I am payload from reducer");
      const { todo } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            data: todo,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((item) => item.id !== action.id);
      console.log(newList, "Delete from reducer");
      return {
        ...state,
        list: newList,
      };

    case "MARK_AS_READ":
      const markedList = state.list.map((item) => {
        console.log(item,"i am item from reducer");
        console.log(action.id,"i am item from reducer");
        if (item.id === action.id) {
          return {
            ...item,
            isRead: !item.isRead,
          };
        }
        return item;
      });
      return {
        ...state,
        list: markedList,
      };

    case "EDIT_TODO":
      const { title, description, index } = action.payload;
      const updatedList = state.list.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            data: {
              title: title,
              description: description,
            },
          };
        }
        return item;
      });
      return {
        ...state,
        list: updatedList,
      };
    default:
      return state;
  }
};

export default todoReducer;
