import React, { useState } from "react";
import { useForm } from 'react-hook-form'

function RegForm() {
    const [name, setName] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelChange = (event) => {
        const { name, value } = event.target
        setName((data) => ({ ...data, [name]: [value] }))
        
    }
  
    
    const onSubmit = (event) => {
        console.log(`${name.fname} ${name.email} ${name.password} ${name.cpassword}`);
       document.getElementById("msg").innerHTML= "submitted"
    }

    return (
        <>
        <div className="container">
            <h3 className="heading">Sign Up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Fullname</label>
                
                <input type="text" value={name.fname} name="fname"{...register("fname", { required: true})} onChange={handelChange} /><br />
                {errors.fname && (<p style={{color:"red"}}>Enter name</p>)}
                <label>Email Id</label>
                <input type="email" value={name.email} name="email" onChange={handelChange}  {...register("email", {
                    required: true
                })}/><br />
                {errors.email && <p style={{ color: "red" }}>Email is required</p>}

                <label>Password</label>
                <input type="password" value={name.password} name="password"{...register("password", { required: true, minLength: 8, pattern: "" })} onChange={handelChange} /><br />
                {errors.password && errors.password.type === "required" && <p> Enter Password</p>}
                {/* {errors.password && errors.password.type ==="pattern" && (<p>Enter any one alpha</p>)} */}
                {errors.password && errors.password.type === "minLength" && <p>Enter atleast 8 Character</p>}
               
                <button className="btn">submit</button>

            </form>
            </div>
            <div id="msg"name="submit"></div>
        </>
    )
}
export default RegForm