import React, { useState } from 'react' 
import app from './App.css'
import UserDetails from './components/P';
function App() {

  const [color, setColor] = useState("aqua");

  return (
    // <div className='body' style={{ backgroundColor: color }}>
    //  <div className='container'>test</div>
    // </div>
    <>
    <UserDetails />
    </>
  );
}

export default App;
