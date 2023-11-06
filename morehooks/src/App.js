import './App.css';
import ComA from './components/useContext/ComA';
import Uncontroled from './components/useRef/uncontroled';
import UseReducer from './components/useReducer/useReducer';
import DocTitleOne from './components/customHooks/practice1/DocTitleOne';
import DocTitleTwo from './components/customHooks/practice1/DocTitleTwo';
import CounterOne from './components/customHooks/practice2/CounterOne';
import CounterTwo from './components/customHooks/practice2/CounteTwo';
import UserForm from './components/customHooks/practice3/UserForm';

function App() {
  return (
    <div>
      <UserForm />
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* < UseReducer /> */}
      {/* <Uncontroled /> */}
      {/* <ComA /> */}
    </div>
  );
}

export default App;
