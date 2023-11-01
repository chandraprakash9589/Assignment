import logo from './logo.svg';
import './App.css';
import PropsFunc from './componants/props';
import Myprops from './componants/Myprops';

function App() {
  
  return (
    <>
      <Myprops tech="React"/>
      <PropsFunc name = "Jay" tech="Java" />
      <PropsFunc name="Yogesh" tech = "React" />
    </>
  );
}

export default App;
