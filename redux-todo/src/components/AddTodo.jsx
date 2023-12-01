import React, { useState } from 'react'
import { Card,Form,Button } from 'react-bootstrap'
function AddTodo() {
  const [todo,setTodo] = useState("")
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
        <Form >
          

          <Form.Group className="mb-3">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              type="text"
              name = "todo"
              value={todo}
              onChange={(e)=>{setTodo(e.target.value)}}
            />
            {todo}
           
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default AddTodo
