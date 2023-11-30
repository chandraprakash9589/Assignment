import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchTodo } from '../action/Action'
function Todolist({fetchTodo}) {

  useEffect(()=>{
    fetchTodo()
  },[])
  return (
    <div>
      
    </div>
  )
}
const mapStateToProps = (state)=>{
  return { 
    todo : state.todos
  }
}
const mapDispatchToProps = (dispatch)=>{
  return { 
    todo : ()=>dispatch(fetchTodo())
  }
}

export default Todolist
