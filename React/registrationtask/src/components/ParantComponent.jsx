import React, { Component } from 'react'
import ShowDetail from './ShowDetail.jsx'
import InputDetail from './InputDetail.jsx'
import { BrowserRouter , Routes, Route, Link, Navigate } from "react-router-dom";

export default class ParantComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<InputDetail />}></Route>
          <Route path='/users' element={<ShowDetail />}></Route>

        </Routes>
        
        
        </BrowserRouter>
        {/* <ShowDetail />   */}
      </div>

    )
  }
}
