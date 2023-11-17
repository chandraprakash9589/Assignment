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

  handleUpdate = (index,updatedTitle,updatedDescription)=>{
    const updatedData = [...this.state.data];
    updatedData[index] = {title:updatedTitle,description:updatedDescription};
    this.setState({ data: updatedData });
  };

  handleRemove = (index) => {
    const updatedData = [...this.state.data];
    // console.log("index",index)
    // console.log("updatedData",updatedData)
    updatedData.splice(index, 1);
    this.setState({ data: updatedData });
  };

  handleMarkAsRead = (index) => {
    const updatedData = [...this.state.data];
    updatedData[index].isRead = true;
    this.setState({ data: updatedData });
  };

  CallBack = (title,description)=>{
    const userData = {title,description,isRead: false };
    console.log("userdata",userData)
    this.setState((prevState) => ({
      data: [...prevState.data, userData],
      // showForm : false,
    }));
  }
  handleSubmit = ()=>{
    // this.setState({
    //   showForm:false,
    // })
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
    
    
    <Route exact path='/' element={<Todos onSubmit={this.handleSubmit} parentCallback={this.CallBack}/>} />
  
        
    
    <Route path='/showtodo' element={<ShowToDoes onSubmit={this.handleBack} userData={this.state.data} onUpdate={this.handleUpdate} onRemove={this.handleRemove} onMarkAsRead={this.handleMarkAsRead}/>} />
    
    
  
  </Routes>
  </div>
);
  }
}

export default App;
