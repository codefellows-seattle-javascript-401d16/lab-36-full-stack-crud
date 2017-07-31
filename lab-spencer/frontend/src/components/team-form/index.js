import React from 'react';

class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.team ? props.team : { name: '', city: '', state: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.team)
      this.setState(props.team);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
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
          name='city'
          type='text'
          placeholder='City'
          value={this.state.city}
          onChange={this.handleChange}
        />
        <input
          name='state'
          type='text'
          placeholder='State'
          maxlength={2}
          value={this.state.state}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}
