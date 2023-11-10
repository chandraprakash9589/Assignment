import './App.css';
// import DetailsForm from './components/DetailsForm';
// import ShowDetails from './components/ShowDetails';
import UserDetails from './components/UserDetails';
// import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <UserDetails />

    // <Routes>
    //   <Route path='/' element={<UserDetails />}></Route>
    //   <Route path='/ShowDetails' element={<ShowDetails />}></Route>
    //   <Route path='/DetailsForm' element={<DetailsForm />}></Route>
    //   <Route path='UserDetails' element={<UserDetails />}></Route>
    // </Routes>
  );
}

export default App;
