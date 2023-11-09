import ParentComponent from './components/ParentComponent'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <ParentComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
