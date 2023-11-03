import React from 'react'
import { useContext } from 'react'
import { userContext } from './practice'
function UseContext() {
  const name = useContext(userContext)
  return (
    <div>
      <>
      <h1>Usecontext running {name}</h1>
      </>
    </div>
  )
}

export default UseContext
