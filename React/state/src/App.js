import logo from './logo.svg';
import './App.css';
import MyState from './componants/MyState';
import MyEvent from './componants/MyEventFC';
import MyEventC from './componants/MyEventCC';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyEvent/>
        <br />
        <MyEventC/>
        <br />
        <MyState />

      </header>
    </div>
  );
}

export default App;
