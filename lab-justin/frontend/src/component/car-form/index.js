import React from 'react'
import * as util from '../../lib/util.js'

class CarForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.car ? props.car : {make: '', model: '', year: ''}
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
          name='make'
          type='text'
          placeholder='car make'
          value={this.state.make}
          onChange={this.handleChange}
          />

        <input
          name='model'
          type='text'
          placeholder='car model'
          value={this.state.model}
          onChange={this.handleChange}
          />

        <input
          name='year'
          type='number'
          placeholder='car year'
          value={this.state.year}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default CarForm