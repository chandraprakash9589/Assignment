import ShowTodo from "../components/ShowTodo";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.todoReducers,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
