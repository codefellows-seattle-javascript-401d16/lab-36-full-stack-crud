import React from 'react';
import * as util from '../../lib/util.js';

class PlaceForm extends React.Component{
  constructor(props){
    super(props);

    this.state = props.place ? props.place : {title: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.place)
      this.setState(props.place);
  }

  handleChange(e){
    this.setState({title: e.target.value});
  }

  handleSubmit(e){
    e.preventDevault();
    let{onComplete} = this.props;
    console.log(this.props, 'this dot props');
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error => {
          util.log('PLcaeForm Error, error');
          this.setState({error});
        });
    }
  }
  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'place-form': true,
          'error': this.state.error,
        })}>

        <input
          name='title'
          type='text'
          placeholder='place'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }

}

export default PlaceForm;
