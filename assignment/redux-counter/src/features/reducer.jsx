const initialState = {value : 0}

export default function counterReducer(state=initialState,action){
  console.log(state.value)
  switch(action.type){
    case 'increment':
      return {...state,value:state.value+1}
      break;
    case 'decrement':
      return { value : state.value-1}
      break;
    default:
      return state
  }
}
