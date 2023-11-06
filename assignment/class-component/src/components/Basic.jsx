// import React, { Component } from 'react'

// export class Basic extends Component {
//   constructor({props}){
//     console.log("cons")
//     super()
//     this.state = {
//       food : "A"
//     }
//   }
//   componentDidMount(){
//    this.setState(()=>({food:"B"}))
//    console.log("didmount")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerived method from props")
//     return null
//   }
//   // shouldComponentUpdate(){  not update the value and page not re-render
//   //   return false
//   // }
//   componentDidUpdate(){
//     console.log("update")
//   }
//   getSnapshotBeforeUpdate(){
//     console.log("get snapshot")
//     return null
//   }
//   componentWillUnmount(){
//     console.log("component will unmount")
//   }

//   render() {

//     return (
//       <div>
//         <>
        
//         <h1>{this.state.food}</h1>
//         <h1>{this.props.name}</h1>
//         </>
//       </div>
//     )
//   }
// }

// export default Basic




import React, { Component } from 'react'

export class Basic extends Component {
  constructor(props) {
    super(props)
    console.log("constructor is run before the mounting")
    this.state = {
       email : this.props.email,
       name : this.props.name
    }
  }
  static getDerivedStateFromProps(props,state){
    if(props.email!==state.email){
      return{
        name : props.name,
        email : props.email
      }
    }
     console.log("getDerivedFromProps is running")
     return null
  }

  componentDidMount(){
    console.log("componentdidmount")
    this.setState({name:"xyz"})
  }
  shouldComponentUpdate(){
      console.log("should update")
      return false
  }
  
  render() {
    return (
      <div>
         <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Basic
