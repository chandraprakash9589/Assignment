import React, { Component } from 'react'
import Context from './Context'

export const userContext = React.createContext("red")
export class CreateContext extends Component {
  render() {
    return (
      <div>
          <userContext.Provider value="blue">
           <Context/>
        </userContext.Provider>
      </div>
    )
  }
}

export default CreateContext
