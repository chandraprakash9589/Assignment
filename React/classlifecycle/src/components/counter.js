import React, { useState } from 'react'
import Counter01 from './counter01';
import Counter02 from './counter02';

const Counter =() =>{
  const [counter01, setCounter01] = useState(0);

  const increaseCounter01 = () =>{
    setCounter01(counter01+ 1);
  };
  
  const [counter02, setCounter02] = useState(0);

  const increaseCounter02 = () =>{
    setCounter02(counter02+ 1);
  };


  
  return(
    <div>
      <div>
        <Counter01 value={counter01} onClick={increaseCounter01} />
      </div>
      <div>
        <Counter02 value={counter02} onClick={increaseCounter02} />
      </div>
    </div>
  )
}

export default Counter
// export default class Counter extends Component {
// constructor(props){
//   super(props)
//   this.state = {
//     counter01 : 0,
//     counter02 : 0
//   };
// }

// addCounter01 = () => {
//   this.setState({
//     counter01: this.props.counter01 + 1,
//   });
 
// };

// addCounter02 = () => {
//   this.setState({
//     counter02: this.counter02 + 1,
//   });

// };

//   render() {
//     return (
//       <div>
//         <Counter01 counter01= {this.counter01} onClick={this.addCounter01}/>
//         <Counter02 counter02= "01" />
//       </div>
//     )
//   }
// }
