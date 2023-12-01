import ShowTodo from "../components/ShowTodo";
import { connect } from "react-redux";
import {removeTodo, doneTodo} from '../services/Actions';

const mapStateToProps = (state) => ({
  data: state.todoReducers,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodoHandler: (data) => dispatch(removeTodo(data)),
  doneTodoHandler: (index) => dispatch(doneTodo(index)),
  // editTodoHandler: (index) => dispatch(editTodo(index)),
  
  
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
