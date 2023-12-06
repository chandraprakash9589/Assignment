import Login from "../components/login/Login";
import { connect } from "react-redux";
import { login} from "../services/action";

const mapStateToProps = (state) => ({
  data: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onLoginHandler: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
