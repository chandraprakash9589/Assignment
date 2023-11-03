// import React, { createContext } from 'react'
import React, { Component, createContext } from 'react'
import ComB from "./ComB"

const BioData = createContext();

class ComA extends Component {
  render() {
    return (
      <BioData.Provider value="Yash Saini">
       <ComB /> 
     </BioData.Provider>
    )
  }
}

export { BioData };
export default ComA;

// Using functional component

// const ComA = () => {
//   return (
//     <BioData.Provider value={ "Yash Saini" }>
//       <ComB /> 
//     </BioData.Provider>
//   ) 
// }

// export default ComA
// export {BioData};
