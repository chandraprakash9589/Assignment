import ParentComponent from './components/ParantComponent'
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
