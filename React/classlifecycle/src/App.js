import logo from './logo.svg';
import './App.css';
import LifecycleExample from './components/lifecycle01'
import MyClassComponent from './components/componentDidMount';
import Counter from './components/counter';
import MyApp from './components/componentDidMount';
import MyAge from './components/ageIncrease';
import ParameterEvent from './components/ParameterEvent';
import ClassComponent from './components/classComponents'
import UnControlledForm from './components/refs'


function App() {
  return (
    <div className="App">
      < header className="App-header">
        {/* <MyAge age={9} /> */}
        {/* <ParameterEvent /> */}
        {/* <MyClassComponent fname ="Yogesh Gupta" /> */}
        {/* <LifecycleExample /> */}
        {/* <Counter /> */}
        {/* <ClassComponent /> */}
        <UnControlledForm />
      </header>
    </div>
  );
}

export default App;
