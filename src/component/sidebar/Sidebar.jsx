import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const login = (state)=>state.user
function Sidebar({children}) {
  const navigate = useNavigate()
  const select = useSelector(login)
  const handleLogout= ()=>{
    select.islogin = false
    navigate("/")
  }
  return (
    
    <div className="container-box">
      {select.islogin &&
    <div className='side-box'>
      <ul>
        <Link to="/expenselist">
        <li className='listItem'>DashBoard</li>
        </Link>
        <Link to="add">
        <li className='listItem'>Add Expense</li>
        </Link>
        <Link to="/search">
        <li className='listItem'>Search Expense</li>
        </Link>
        <Link to="/" onClick={handleLogout}>
        <li className='listItem'>Logout</li>
        </Link>
      </ul>
    </div>
}
    <main className='child'>{children}</main>

    </div>
  )
}

export default Sidebar
