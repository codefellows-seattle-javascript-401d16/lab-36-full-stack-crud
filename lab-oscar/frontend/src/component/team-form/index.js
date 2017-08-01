import React from 'react';
import * as util from '../../lib/util.js';

class TeamForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.team ? props.team.name : '',
      owner: props.team ? props.team.owner : '',
      founded: props.team ? props.team.founded : '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.team)
      this.setState(props.team);
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error => {
          util.log('TeamForm Error:', error);
          this.setState({error});
        });
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Team Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='owner'
          type='text'
          placeholder='Team Owner'
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          name='founded'
          type='text'
          placeholder='Founded On'
          value={this.state.founded}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }

}

export default TeamForm;
