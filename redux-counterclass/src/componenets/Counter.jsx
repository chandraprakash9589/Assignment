import React, { Component } from 'react'
import { connect } from 'react-redux'
import countVal from '../action/Action'
export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
 
  handleIncre = ()=>{
    this.props.countVal('increment')
  }
  handleDecre = ()=>{
    this.props.countVal('decrement')
  }
  
  render() {
    const {value} = this.props.value
    return (
      <div style={{marginTop:'50px'}}>
        {value}
        <button onClick={this.handleIncre}>increment</button>
        <button onClick={this.handleDecre}>decrement</button>

      </div>
    )
  }
}
const mapStateToProps = (state)=>({
  ...state
 })
//  const mapDispatchToProps = (dispatch)=>({
//    countVal : ()=>dispatch({type : 'increment'}),
//    countVal : ()=>dispatch({type : 'decrement'})

//  })

export default connect(mapStateToProps,{countVal})(Counter)
