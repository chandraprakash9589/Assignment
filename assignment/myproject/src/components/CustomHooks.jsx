import React from 'react'
import { useEffect } from 'react'
function useCustomHooks(count) {
  useEffect(()=>{
     document.title = `${count}`
  },[count])

  
}

export default useCustomHooks
