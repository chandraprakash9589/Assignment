import React from 'react'
import { Form,Button,Card } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import addTodo from '../redux/action'
import { useNavigate } from 'react-router'

function Todoform() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form,setForm] = useState({
     title : "",
     desc : "",
     dataList : [],
     isRedirect : false
  })

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value
    setForm({...form,[name]:value})
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    const {title,desc,dataList} = form
    dataList.push({title:title,desc:desc})
    dispatch(addTodo('addTodo',dataList))
    setForm({
      ...form,
      isRedirect:true
    })
    navigate('/show')
  }
  return (
    <div>
       <Card
        style={{
          width: "30rem",
          marginLeft: "400px",
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name = "title"
              value={form.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              type="textarea"
              name = "desc"
              value={form.desc}
              onChange={handleChange}
            />
           
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Todoform
