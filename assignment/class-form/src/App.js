import "./App.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import React, { Component } from 'react'
import Utils from "./components/Utils";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <Main/>
        <Routes>
        
        <Route path="/form" element={<Form/>} />
        <Route path="/show" element={<Utils/>}/>
      </Routes>
      </div>
    )
  }
}



export default App;
