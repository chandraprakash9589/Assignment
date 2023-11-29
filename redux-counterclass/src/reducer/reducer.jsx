
const initialval = {value : 0}

function countReducer(state=initialval,action){
    switch(action.type){
      case "increment":
        return {value : action.payload+state.value}
      case 'decrement':
        return {value : state.value-1}
      default:
        return state
    }
}
export default countReducer