import React from 'react'
import * as util from '../../lib/util.js'

class ShipForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.ship ? props.ship : {name: '', type: '', captain: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.ship)
      this.setState(props.ship)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    console.log('booyea')
    let result = onComplete(this.state)
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error=> {
          util.log('ShipForm Error:', error)
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
          'ship-form': true,
          'error': this.state.error,
        })}>

        <input
          name='name'
          type='text'
          placeholder='ship name'
          value={this.state.name}
          onChange={this.handleChange}
          />

        <input
          name='type'
          type='text'
          placeholder='ship type'
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

export default ShipForm
