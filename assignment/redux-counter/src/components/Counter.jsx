import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import counterIncre from '../features/action'
const selectCount = (state)=> state.value

function Counter() {
  const countVal = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <div>
      {countVal.value}
      <button onClick={()=>dispatch(counterIncre('increment'))}>increment</button>
      <button onClick={()=>dispatch(counterIncre('decrement'))}>decrement</button>
      
    </div>
  )
}

export default Counter
