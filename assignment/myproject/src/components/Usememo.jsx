import React, { useState ,useMemo} from 'react'
function Usememo() {
  const [count,setCount] = useState(0)
  const [counttwo,setCounttwo] = useState(0)

  const handleCount=()=>{
   
       setCount(count+1)
  }
  const handleCounttwo=()=>{
    setCounttwo(counttwo+1)
}
const isEven = useMemo(()=>{
  var i=0
  while(i<2000000000) i++
  return count%2===0
},[count])
  return (
    <div>
      <button onClick={handleCount}>{count}</button>
      <span>{isEven? 'even':'odd'}</span>
      <button onClick={handleCounttwo}>{counttwo}</button>

    </div>
  )
}

export default Usememo
