// import React, { useContext } from 'react'
import React, { Component } from 'react'
import { BioData } from './ComA'


class ComC extends Component {
  render() {
    return(
    <BioData.Consumer>
    {(myName) => (
      <h1>Hello {myName}</h1>
    )}
  </BioData.Consumer>
    );
  }
}

export default ComC

// Using Functional Component

// const ComC = ({name}) => {
//   const myName = useContext(BioData);
//   return <h1>Hello {myName}</h1>
// }

// export default ComC
