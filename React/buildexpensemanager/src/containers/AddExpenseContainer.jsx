import { connect } from "react-redux";
import { addExpense } from "../services/action";
// import ExpenseForm from "../components/expense-form/ExpenseForm";
import AddExpense from "../components/add-expense/AddExpense";

const mapStateToProps = (state) => ({
  data: state.expenseReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onExpenseSubmitHandler: (data) => dispatch(addExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);