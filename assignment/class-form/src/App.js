import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import Form from './components/Form';
function App() {
  return (
    <>

     <Routes>
      <Route exact path='/show' element={<ShowDetails/>}/>
      <Route exact path='/' element={ <Main/>}/>
     </Routes>
     
    </>
  );
}

export default App;
