import React, {useState} from 'react'
import useInput from './UseInput'
function UserForm() {

  const [firstname, bindFirstName, resetFirstName ] = useInput('')
  const[lastname, bindLastName, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstname} ${lastname}
    `)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="Firstname">
            First name
          </label>
          <input 
          {...bindFirstName}
          type="text" 
          />
        </div>
        <div>
          <label htmlFor="Lastname">
            Last name
          </label>
          <input 
          {...bindLastName}
          type="text" 
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
