import React from 'react';

class ResortForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.resort ? props.resort : {
      name: '',
      trails: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.resort) this.setState(props.resort);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    console.log('hit handleSubmit');
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render(){
    return(
      <form className='resort-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Resort Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className='submit-button' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ResortForm;
