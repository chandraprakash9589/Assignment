import  React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom'
import Todos from "./components/TodoList.jsx";
import ShowToDoes from './components/ShowToDoes.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title : '',
      description :'',
      userData : null,
      data : [],
      showForm: true,
    };
  }
  handleBack = ()=>{
    this.setState({
      showForm:true,
    })
  }
  render(){
  return (
    <div>
    <Routes>

    <Route exact path='/' element={<Todos />} />
    <Route path='/showtodo' element={<ShowToDoes onSubmit={this.handleBack}/>} />
  </Routes>
  </div>
);
  }
}

export default App;