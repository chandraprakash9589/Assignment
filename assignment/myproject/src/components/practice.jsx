import React from 'react'
import { useState } from 'react'
import UseContext from './UseContext'
import { createContext } from 'react'

 export const userContext = createContext()

function Practice() {
    const [name,setName] = useState("abc")
  return (
    <div>
      <userContext.Provider value={name}>

      <h1>practice component {name}</h1>
      <UseContext/>
      </userContext.Provider>
    </div>
  )
}
export default Practice