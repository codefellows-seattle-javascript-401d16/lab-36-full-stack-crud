import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = props.category
      ? {...props.category}
      : { name: '',  budget: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));

    if(!this.props.category) //how do I clear this form?
      this.setState({name: '', budget: 0 });
  }

  render(){
    return(
      <form className='cat-form' onSubmit={this.handleSubmit}>
        <input
          className='cat-form-input'
          name ='name'
          type ='text'
          placeholder='category'
          value={this.state.name}
          onChange={this.handleChange} />

        <input
          className='cat-form-input'
          name = 'budget'
          type='number'
          placeholder='expense'
          value={this.state.budget}
          onChange={this.handleChange} />

        <button
          className='cat-form-input'
          type='submit'>
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

export default CategoryForm;
