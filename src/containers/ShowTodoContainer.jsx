import ShowTodo from "../components/ShowTodo";
import { connect } from "react-redux";
import { removeTodo, doneTodo, editTodo, getTodo, fetchTodo } from "../services/Actions";

const mapStateToProps = (state) => ({
  data: state.todoReducers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodoHandler: () => dispatch(fetchTodo()),
  removeTodoHandler: (index) => dispatch(removeTodo(index)),
  doneTodoHandler: (index) => dispatch(doneTodo(index)),
  // editTodoHandler: (index) => dispatch(editTodo(index)),
  editTodoHandler: (index, newData) => dispatch(editTodo(index, newData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
