import React from 'react'
import * as util from '../../lib/util.js'

class ArtistForm extends React.Component{
  constructor(props){
    super(props)
    this.state = props.artist ? props.artists : {name: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.artists)
      this.setState(props.artists)
  }

  handleSubmit(e){
    e.preventDefault()
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  render(){
    return(
      <form classNam='artist-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='artist name'
          value={this.state.name}
          onChange={this.handleChange}
          />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }

}

export default ArtistForm
