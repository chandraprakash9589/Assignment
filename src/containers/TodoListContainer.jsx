import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { addTodo } from "../services/Actions/index";

const mapStateToProps = (state) => ({
  data: state.todoReducers,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoHandler: (data) => dispatch(addTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
