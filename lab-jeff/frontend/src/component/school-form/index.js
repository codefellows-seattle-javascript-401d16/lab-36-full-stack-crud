import React from 'react';
import * as util from '../../lib/util.js';

class SchoolForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.school ? props.school : {name: '', city: '', state: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.school)
      this.setState(props.school);
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    console.log('booyea');
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error=> {
          util.log('SchoolForm Error:', error);
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
          'school-form': true,
          'error': this.state.error,
        })}>

        <input
          name='name'
          type='text'
          placeholder='school name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name='city'
          type='text'
          placeholder='city'
          value={this.state.city}
          onChange={this.handleChange}
        />

        <input
          name='state'
          type='text'
          placeholder='state'
          value={this.state.state}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default SchoolForm;
