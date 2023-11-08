import React from 'react'
import { useLocation } from 'react-router-dom'
import ShowDetails from './ShowDetails';
const Utils = () => {
  const { state } = useLocation();
  console.log(state)
  return (
    <div>
      <ShowDetails data={state.userinfo}/>
    </div>
  )
}

export default Utils
