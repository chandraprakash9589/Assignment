export const getTodos = (payload) => {
  return { type: "GET_TODOS", payload }
};

export const addToDo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: {
      todo: todo,
    },
  };
};
export const deleteTodo = (id) => {
  console.log(id, "id actions");
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const readTodo = (updatedTodo) => {
  return {
    type: "MARK_AS_READ",
    updatedTodo,
  };
};
export const editTodo = (updatedTodo) => {
  console.log(updatedTodo,"i am new data from actions");
  const { title, description, id } = updatedTodo;
  return {
    type: "EDIT_TODO",
    payload: {
      title: title,
      description: description,
      index: id,
    },
  };
};
