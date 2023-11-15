import UserDetails from './components/ParentComponent'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import InvalidUrl from './components/InputDetail';
import DetailsForm from './components/InputDetail';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<UserDetails></UserDetails>}></Route>
        {/* <Route exact path='/*' element={<InvalidUrl />}></Route> */}
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
