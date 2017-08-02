import React from 'react';
import {connect} from 'react-redux';
import SchoolForm from '../school-form';
import * as util from '../../lib/util.js';
import * as schoolActions from '../../action/school-actions.js';

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.schoolsFetch();
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <SchoolForm
          buttonText='create school'
          onComplete={this.props.schoolCreate}
        />

        {this.props.schools.map(school =>
          <div key={school._id}>
            {school.title}
            <button
              onClick={() => this.props.schoolDelete(school)}>
              delete
            </button>
          </div>
        )}

      </div>
    );
  }
}

let mapStateToProps = (state) => ({schools: state.schools});
let mapDispatchToProps = (dispatch) => ({
  schoolCreate: (school) => dispatch(schoolActions.schoolCreateRequest(school)),
  schoolDelete: (school) => dispatch(schoolActions.schoolDeleteRequest(school)),
  schoolsFetch: () => dispatch(schoolActions.schoolsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
