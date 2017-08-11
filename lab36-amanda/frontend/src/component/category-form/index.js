import React from 'react';
import * as util from '../../lib/util.js';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = props.category
      ? {...props.category}
      : { name: '',  budget: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.category)
      this.setState(props.category);
  }

  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));

    if(!this.props.category)

      this.setState({name: '', budget: 0 });
    let result = this.state;
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error => {
          util.log('CategoryForm Error', error);
        });
    }
  }

  render(){
    return(
      <form className='cat-form' onSubmit={this.handleSubmit}
        className={util.classToggler({
          'category-form': true,
          'error': this.state.error,
        })}>
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
