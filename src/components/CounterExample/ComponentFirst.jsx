import React from 'react'
import useCounter from './useCounter'

const ComponentFirst = () => {
  const clickedButton = useCounter(0,"ComponentFirst")

  return (
    <div>
      <h1>This is the First Component</h1>
      <button onClick={clickedButton}>Click here</button>
    </div>
  )
}

export default ComponentFirst