import React from 'react';
import * as util from '../../lib/util.js';

class BookshelfForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.bookshelf ? props.bookshelf : {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(props){
    if(props.bookshelf)
      this.setState(props.bookshelf);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {onComplete} = this.props;
    util.log('hit form submit');
    let result = onComplete(this.state);
    if(result instanceof Promise) {
      result.then(() => this.setState({error:null}))
        .catch(error => {
          util.log('BookshelfForm Error: ', error);
          this.setState({error});
        });
    }
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'bookshelf-form': true,
          'error': this.state.error,
        })} >

        <input
          name='owner'
          type='text'
          placeholder='owner'
          onChange={this.handleChange}
        />

        <input
          name='location'
          type='text'
          placeholder='location'
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default BookshelfForm;
