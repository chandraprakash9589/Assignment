import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Table,Button,Modal,Form } from 'react-bootstrap'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import deleteTodo from '../redux/action'
const selectTodos = (state)=>state.todos

function Todolist() {
  const [required,setRequired] = useState(false)
  const [updateForm,setupdateForm] = useState({
    title:'',
    desc : '',
    editIndex : null
  })
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const todo = todos.todos
  
  const handleDelete = (index)=>{
    dispatch(deleteTodo('deleteTodo',todos,index))
  }
  const handleUpdate = (index)=>{
    const list = todo
    const editData = list[index]
    console.log(list)
    setupdateForm({
      ...updateForm,
      title: editData.title,
      desc : editData.desc,
      editIndex:index
    })
    setRequired(true)
  }
  const handleChange = (event)=>{
   const name = event.target.name
   const value = event.target.value
   setupdateForm({
    ...updateForm,[name]:value
   })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const {title,desc,editIndex} = updateForm
    const newData = {
      title:title,
      desc : desc
    }
    todo[editIndex] = newData
    setRequired(false)
  }
  return ( 
    <div>

      {required ?
       <div
       className="modal show"
       style={{ display: 'block', position: 'initial' }}
     >
       <Modal.Dialog>
         <Modal.Header closeButton>
           <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>
 
         <Modal.Body>
         <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name = "title"
              value={updateForm.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              type="textarea"
              name = "desc"
              value={updateForm.desc}
              onChange={handleChange}
            />
           
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
         </Modal.Body>
 
         
       </Modal.Dialog>
     </div>
    :
       <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Desc</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todo &&
              todo.map((v, index) => {
                return(
               
                    <tr key={index}>
                      <td>{v?.title}</td>
                      <td>{v?.desc}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={()=>(handleDelete(index))}
                        >
                          Delete
                        </Button>
                      </td>
                      <td>
                          <Button
                            variant="primary"
                            onClick={()=>(handleUpdate(index))}
                          >
                            Update
                          </Button>
                      </td>
                    </tr>
                  );
                
              })}
          </tbody>
        </Table>
}
    </div>
  )
}

export default memo(Todolist)
