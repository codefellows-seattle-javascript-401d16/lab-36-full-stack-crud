import React from 'react'
import * as util from '../../lib/util.js'

class UserForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.user ? props.user : {name: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if (props.user) this.setState(props.user)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    let result = onComplete(this.state)
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error=> {
          util.log('ListForm Error:', error)
          this.setState({error})
        })
    }
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'user-form': true,
          'error': this.state.error,
        })}>

        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default UserForm
