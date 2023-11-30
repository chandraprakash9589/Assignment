
const initialState = {
  todos:[]
}

export default function todoReducer(state=initialState,action){
 
   switch(action.type){
    case 'addTodo':
      return {todos : [...state.todos,action.payload[0]]}
    case 'deleteTodo':
      return {
        todos : state.todos.filter((todo) =>  state.todos.indexOf(todo) !== action.id)
      }
    default:
      return {...state}
   }

}