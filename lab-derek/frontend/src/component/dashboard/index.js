import React from 'react';
import {connect} from 'react-redux';
import YearForm from '../year-form';
import * as util from '../../lib/util.js';
import * as yearActions from '../../actions/year-actions.js';

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.yearFetch();
  }

  render() {
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <YearForm
          buttonText='create year'
          onComplete={this.props.yearCreate}
        />

        {this.props.years.map(year =>
          <div key={year._id}>
            {year.name}
            <button
              onClick={() =>
                this.props.yearDelete(year)}>
                delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({years: state.years});

let mapDispatchToProps = (dispatch) => ({
  yearFetch: () => dispatch(yearActions.yearFetchRequest()),
  yearCreate: (year) => dispatch(yearActions.yearCreateRequest(year)),
  yearUpdate: (year) => dispatch(yearActions.yearUpdateRequest(year)),
  yearDelete: (year) => dispatch(yearActions.yearDeleteRequest(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
