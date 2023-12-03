export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    data: data,
  };
};

export const removeTodo = (index) => {
  return {
    type: "REMOVE_TODO",
    payload: index,
  };
};

export const doneTodo = (index) => {
  return {
    type: "DONE_TODO",
    payload: index,
  };
};

export const editTodo = (index, newData) => {
  return {
    type: "EDIT_TODO",
    payload: { index, newData },
  };
};
