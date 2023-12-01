const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((item)=> item.id !== action.id)
      return {
        ...state,
        list: newList
      }
    
    case "EDIT_TODO":
      const { index, editedTitle, editedDescription } = action.payload;
      const updatedList = state.list.map((item, i) => {
        if (i === index) {
          return {
            id: item.id,
            data: {
              title: editedTitle,
              description: editedDescription,
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
