import React, { useState } from 'react' 
import app from './App.css'

function App() {

  const [color, setColor] = useState("aqua");

  return (
    <div className='body' style={{ backgroundColor: color }}>
     <div className='container'>test</div>
    </div>
  );
}

export default App;
