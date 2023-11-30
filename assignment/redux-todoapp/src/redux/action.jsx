
const addTodo =(actions,data,id)=>{
  console.log(id)
  return{
    type : actions,
    payload : data,
    id : id
  }
  
}


export default addTodo