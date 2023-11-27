const intialstate = {cartData:[]}
export default function cardItems(state=intialstate,action){
switch(action.type){
  case 'Add':
    return{
      ...state,
      cartData : action.data
    }
    break;
  default:
    return state
}
}