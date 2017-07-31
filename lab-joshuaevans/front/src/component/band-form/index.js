import React from 'react'
import * as util from '../../lib/util.js'

class BandForm extends React.Component{
  constructor(props){
    super(props)
    this.state = props.bands ? props.bands : {name: '', numOfMembers: 0}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.bands)
      this.setState(props.bands)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    let result = onComplete(this.state)
    if(result instanceof Promise){
    result.then(() => this.setState({error: null}))
    .catch(error=> {
      util.log('BandForm Error:', error)
      this.setState({error})
    })
  }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <form className='band-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='band name'
          value={this.state.name}
          onChange={this.handleChange}
          />
        <input
          name='numOfMembers'
          type='number'
          placeholder='number of members'
          value={this.state.numOfMembers}
          onChange={this.handleChange}
          />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }

}

export default BandForm
