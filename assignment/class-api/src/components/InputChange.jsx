import React, { useState } from 'react'

function useInputChange(initialvalue) {
  const [value,setValue] = useState("")
  const reset = ()=>{
    setValue(initialvalue)
  }
  const bind = {
    value,
    onChange:e=>{
      setValue(e.target.value)
    }
  }
  return [value,bind,reset]
}

export default useInputChange
