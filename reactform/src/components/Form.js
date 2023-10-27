import React from "react";
class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "",
            email : "",
            password : ""
        }
        const handelChange = (event)=>{
            const name = event.target
            
        }

    }
     render(){
        return(
            <>
             <div className="container">
                <form>
                    <label>Fullname</label>
                    <input type="text"name="name"value={this.state.name} onChange={this.handleChange}/>
                    <label>Email</label>
                    <input type="email"name="email"value={this.state.email} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" name="password"value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn">submit</button>
                </form>
             </div>
            </>
        )
     }
}
export default Form