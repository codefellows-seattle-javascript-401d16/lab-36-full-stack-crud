import React from 'react';
import * as util from '../../lib/util.js';

class YearForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.year ? props.year : {name: '', dayJan1: 'sun', days: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.year)
      this.setState(props.year);
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error => {
          util.log('YearForm Error:', error);
          this.setState({error});
        });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
    if(this.props.year) {
      this.props.year[e.target.name] = e.target.value;
    }
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'year-form': true,
          'error': this.state.error,
        })}>

        <input
          name='name'
          type='text'
          placeholder='Name of the Year'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name='dayJan1'
          type='text'
          placeholder='What Day of the Week is Jan 1?'
          value={this.state.dayJan1}
          onChange={this.handleChange}
        />

        <button type='submit'>
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

export default YearForm;
