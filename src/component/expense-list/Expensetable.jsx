import React, { useEffect } from 'react'
import { Table, Button } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchExpense,expenseDelete } from '../../thunk';

const expense = (state)=>state.expenseReducer
function Expensetable() {
  const expenselist = useSelector(expense)
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  useEffect(()=>{
   dispatch( fetchExpense())
  },[])

 

  const handleDelete = (id) =>{
   dispatch(expenseDelete(id))
  }
  const handleUpdate = (id)=>{
    navigate("/add", { state: { index: id } });
  }
  return (
    <div>
      {/* {expenselist.loading ? <>loading</>:<h1>suc</h1>} */}
       <Table striped bordered hover>
          <thead>
            <tr>
            <th >#</th>
            <th >Expense Type</th>
            <th >Expense Date</th>
            <th >Expense Amount</th>
            <th >Description</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!expenselist.isSearch?
            expenselist.expense.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td>{index+1}</td>
                  <td>{val?.type}</td>
                  <td>{val?.date}</td>
                  <td>{val?.amount}</td>
                  <td>{val?.desc}</td>
                  <td>
                   
                    <Button
                      variant="primary"
                      onClick={()=>handleUpdate(index)} 
                      >
                      Update
                    </Button>

                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={()=>handleDelete(val.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            }):
            expenselist.searchItem.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td>{index+1}</td>
                  <td>{val?.type}</td>
                  <td>{val?.date}</td>
                  <td>{val?.amount}</td>
                  <td>{val?.desc}</td>
                  <td>
                   
                    <Button
                      variant="primary"
                      onClick={()=>handleUpdate(index)} 
                      >
                      Update
                    </Button>

                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={()=>handleDelete(val.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
    </div>
  )
}

export default Expensetable
