import React, { Component } from 'react';
import { ComponentDidCatch } from './components/ComponentDidCatch';
import Home from './components/Home';
 import Student from './components/Student';


class App extends Component {
  // Initializing the state
  state = {
    error: true,
  };
 
  componentDidCatch(error) {
    // Changing the state to true 
    // if some error occurs
    this.setState({
      error: false
    });
  }
 
  render() {
    return (
      <React.StrictMode>
        <div>
          {this.state.error ? <div>Some error</div> : <ComponentDidCatch />}
        </div>
      </React.StrictMode>
    );
  }
}
 
// class App extends Component{
//   constructor()
//   {
//     super()
//     this.state = {
//       data: 0
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1> getSnapshotBeforeUpdate life cycle method</h1>
//         <Home />
       
//       </div>
//     )
//   }
// }

// class App extends Component{
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render(){
//   return (
//     <div>
//     {
//       this.state.show? <Student />
//       : <h4>Component is remove</h4>
//     }
//     <button onClick={()=>this.setState({show: false})}>Toogle Student Component</button>
//     </div>
//   )
//   }
// }
export default App;
