import { connect } from "react-redux";
import ExpenseTable from "../components/expense-list/ExpenseTable";
import { removeExpense } from "../services/action";

const mapStateToProps = (state) => ({
  data: state.expenseReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseHandler: (index) => dispatch(removeExpense(index)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
