
const initialData = {
  expense : [],
  searchItem :[],
  isSearch : false,
  loading : false
}

export const expenseReducer = (state=initialData,action) =>{
  switch(action.type){
    case 'fetchexpense':
      return {
         ...state,
         loading : true
      }
      case 'expensesucees':
      return {
         expense : action.payload,
         loading : false
      }
    case "addexpense":
      return{
        ...state,
        expense : [...state.expense,action.payload]
      }
    case "deleteexpense":

      return {
        expense: state.expense.filter((item) =>  item.id !== action.payload)
      }
    case 'search':
      return {
        ...state,
        isSearch : true,
        searchItem : state.expense.filter((item) =>  item.desc === action.payload)
      }
    case 'searchType':
      return {
        ...state,
        isSearch : true,
        searchItem : state.expense.filter((item) => item.type.toLowerCase() === action.payload.toLowerCase())
      }
      case 'searchYear':
        const d = new Date()
        const year = d.getFullYear();
        return {
          ...state,
          isSearch : true,
          searchItem : state.expense.filter((item) => item.type.toLowerCase() === action.payload.toLowerCase())
        }
    default :
       return state
  }
}