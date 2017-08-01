import React from 'react';
import {connect} from 'react-redux';
import ResortForm from '../resort/resort-form';
import * as resortActions from '../../action/resort-action.js';

class Dashboard extends React.Component{
  render(){
    return(
      <div className='dashboard'>
      yo from Dash
        <ResortForm
          buttonText='Create Resort'
          onComplete={this.props.resortCreate}
        />

      </div>
    );
  }
}

let mapStateToProps = (state) => ({resorts: state.resorts});

let mapDispatchToProps = (dispatch) => ({
  resortCreate: (resort) => dispatch(resortActions.resortCreateRequest(resort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
