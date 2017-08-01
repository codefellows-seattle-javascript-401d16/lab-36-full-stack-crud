import React from 'react';
import * as util from '../../lib/util.js';

class LeaderForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.leader ? props.leader : {firstName: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.leader)
      this.setState(props.leader);
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    console.log('booyea');
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error=> {
          util.log('LeaderForm Error:', error);
          this.setState({error});
        });
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'leader-form': true,
          'error': this.state.error,
        })}>

        <input
          name='userName'
          type='text'
          placeholder='userName'
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input
          name='firstName'
          type='text'
          placeholder='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          name='lastName'
          type='text'
          placeholder='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default LeaderForm;
