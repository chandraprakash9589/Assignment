import React,{Component} from 'react'

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import User from './components/user';


class App extends Component { 
  render() { 
  return (
    <Router>
    <div>
      <header>
       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/user/anil">Anil</Link>
        </li>
        <li>
          <Link to="/user/peter">Peter</Link>
        </li>
       </ul>
      </header>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/user/:name' element={<User />}></Route>
        <Route exact path='/*' element={<Navigate to={"/"} />}></Route>
      </Routes>
    </div>
    </Router>
  );
}
}

export default App;
