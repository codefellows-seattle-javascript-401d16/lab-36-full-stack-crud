import React from 'react';
import {connect} from 'react-redux';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.state = props.expense
      ? {...props.expense}
      : {content: '', categoryID: props.categoryID};

    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState({...props.expense});
    if(props.categoryID)
      this.setState({categoryID: props.categoryID});
  }

  handelChange(e){
    this.setState({content: e.target.value});
  }

  handelSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense)
      this.setState({content: ''});
  }

  render(){
    return(
      <form className='expense-form' onSubmit={this.handelSubmit}>
        <input
          className='expense-input'
          name = 'content'
          type = 'text'
          placeholder = 'expense'
          value={this.state.content}
          onChange={this.handelChange} />

        <button
          className='expense-button'
          type='submit'>
          {this.props.buttonText}
        </button>
      </form>
    );

  }
}

export default ExpenseForm;
