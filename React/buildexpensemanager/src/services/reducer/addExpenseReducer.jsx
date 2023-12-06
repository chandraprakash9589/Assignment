const initialExpenses = {
  expenses : []
}
const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // console.log("reducer:",action.data)
      return [...state,{ expenses: action.data }];
      
    case "REMOVE_EXPENSE":
      return state.filter((item, index) => index !== action.payload);


    default:
      return state;
  }
};

export default expenseReducer;
