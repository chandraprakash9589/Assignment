import Register from "../components/register/Register";
import { connect } from "react-redux";
// import TodoList from "../components/TodoList";
// import { addTodo } from "../services/Actions/index";
import { register } from "../services/action";

const mapStateToProps = (state) => ({
  data: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitHandler: (data) => dispatch(register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
