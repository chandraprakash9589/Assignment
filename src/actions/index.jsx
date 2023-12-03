export const addToDo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const readTodo = (id) => {
  return {
    type: "MARK_AS_READ",
    id,
  }
}
export const editTodo = (newData) => {
  return {
    type: "EDIT_TODO",
    payload: {
      title: newData.title,
      description: newData.description,
      index: newData.id,
    },
  };
};
