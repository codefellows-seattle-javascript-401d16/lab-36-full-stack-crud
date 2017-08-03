import React from 'react'
import * as util from '../../lib/util.js'

class BarForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.bar ? props.bar : {name: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.bar)
      this.setState(props.bar)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    console.log('booyea')
      let result = onComplete(this.state)
      if(result instanceof Promise){
        result.then(() => this.setState({error: null}))
        .catch(error=> {
          util.log('BarForm Error:', error)
          this.setState({error})
        })
      }
      if (!this.props.name) {
        this.setState({name:''})
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
          'bar-form': true,
          'error': this.state.error,
        })}>

        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}/>

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default BarForm
