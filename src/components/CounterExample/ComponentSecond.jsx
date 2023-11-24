import React from 'react'
import useCounter from './useCounter'

const ComponentSecond = () => {
  const clickedButton = useCounter(0, "ComponentSecond")

  return (
    <div>
      <h1>This is Second Component</h1>
      <button onClick={clickedButton}>Click here</button>
    </div>
  )
}

export default ComponentSecond