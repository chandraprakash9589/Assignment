import React,{Component, createRef} from 'react'

export default class UnControlledForm extends Component {
  constructor(){
    super()
    this.inputRef = createRef();
  }

  handleSubmit = () => {
    console.log("Input Value: ", this.inputRef.current.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(inputRef) => this.inputRef = inputRef} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}