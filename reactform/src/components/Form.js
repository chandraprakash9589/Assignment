import React from "react";
class Form extends React.Component{
    constructor(){
        super()
         this.state = {
             fname :"",
             email:'',
             pwd : '',
             pwd2 :'',
             errors: {}
            
         }
         this.handelChange = this.handelChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleValid = this.handleValid.bind(this)
        }
         handelChange = (event)=>{
            const name = event.target.name
            const value = event.target.value
            this.setState({[name]:value})
            console.log(event.target.name)
            
        }
        handleValid = (event)=>{
            const {fname,email,pwd,pwd2} = this.state
            let errors = {}
            if( fname === ""){
                errors.fname = "Fullname is required"
            }
            if(email === ""){
                errors.email = "Email is required"
            }
            if(pwd === ""){
                errors.pwd = "password is required"
            }
             if(pwd.length<8){
                errors.pwd = "password must contain 8 char"
            }
            if(pwd!==pwd2){
                errors.pwd2 = "password is not match"
            }
            this.setState({errors})
            return errors
            if(!errors){
                alert("submitted")
            }
            
        }

        
        
        
        handleSubmit = (event)=>{
           
            event.preventDefault()
        }
   render(){
       
       return(
        <>
        <div className="container">
            <h1 className="heading">Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Fullname</label><br/>
                <input type="text"name="fname"value={this.state.fname} onChange={this.handelChange}/>
                 <p className="error">{this.state.errors.fname}</p>
                <label>Email</label><br/>
                <input type="email" name="email"value={this.state.email} onChange={this.handelChange}/>
                <p className="error">{this.state.errors.email}</p>
 
                <label>Password</label><br/>
                <input type="password"name="pwd"value={this.state.pwd} onChange={this.handelChange}/>
                <p className="error">{this.state.errors.pwd}</p>
                <label> Confirm Password</label>
                <input type="password"name="pwd2"value={this.state.pwd2} onChange={this.handelChange}/>
                <p className="error">{this.state.errors.pwd2}</p>
                <button className="btn"onClick={this.handleValid}>Submit</button>
                
            </form>
        </div>
        </>
    )
   }
}
export default Form