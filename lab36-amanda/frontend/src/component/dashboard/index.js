import React from 'react';
import {connect} from 'react-redux';
import PlaceForm from '../place-form';
import * as util from '../../lib/util.js';
import * as placeAction from '../../action/place-action';

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.placesFetch();
  }

  render(){
    return(
      <div className='dashboard'>
        <h2> Dashboard </h2>
        <PlaceForm
          buttonText='create place'
          onComplete={this.props.placeCreate}
        />

        {this.props.places.map(place =>
          <div key={place.id}>
            {place.title}
            <button
              onClick={() => this.props.placeDelete(place)}>
              delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({places:state.places});
let mapDispatchtoProps = (dispatch) => ({
  placeCreate: (place) => dispatch(placeAction.placeCreateRequest(place)),
  placeDelte: (place) => dispatch(placeAction.placeDeleteRequest(place)),
  placeFetch: () => dispatch(placeAction.placesFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Dashboard);
