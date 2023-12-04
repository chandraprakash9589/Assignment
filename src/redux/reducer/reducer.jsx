
const initialData = {
  user : []
}

export function expenseReducer(state=initialData,action){
  switch(action.type){
    case 'addUser':
      return {
        user : [...state.user,action.users]
      }
      case 'fetchuser':
        return {
        ...state
      }
      case 'showuser':
        return{
          ...state,
          user : action.payload
        }
    default:
      return state
  }
}