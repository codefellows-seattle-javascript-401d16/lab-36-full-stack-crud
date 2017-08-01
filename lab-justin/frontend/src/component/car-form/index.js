import React from 'react'
import * as util from '../../lib/util.js'

class CarForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.car ? props.car : {name: '', type: '', captain: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.car)
      this.setState(props.car)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    console.log('booyea')
    let result = onComplete(this.state)
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error=> {
          util.log('CarForm Error:', error)
          this.setState({error})
        })
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'car-form': true,
          'error': this.state.error,
        })}>

        <input
          name='name'
          type='text'
          placeholder='car name'
          value={this.state.name}
          onChange={this.handleChange}
          />

        <input
          name='type'
          type='text'
          placeholder='car type'
          value={this.state.type}
          onChange={this.handleChange}
          />

        <input
          name='captain'
          type='text'
          placeholder='captain name'
          value={this.state.captain}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default CarForm