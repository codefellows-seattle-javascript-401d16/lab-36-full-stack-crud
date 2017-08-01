import React from 'react';
import {connect} from 'react-redux';
import LeaderForm from '../leader-form';
import * as util from '../../lib/util.js';
import * as leaderActions from '../../action/leader-actions.js';

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.leadersFetch();
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <LeaderForm
          buttonText='create leader'
          onComplete={this.props.leaderCreate}
        />

        {this.props.leaders.map(leader =>
          <div key={leader._id}>
            {leader.firstName}
            <button
              onClick={() => this.props.leaderDelete(leader)}>
              delete
            </button>
          </div>
        )}

      </div>
    );
  }
}

let mapStateToProps = (state) => ({leaders: state.leaders});
let mapDispatchToProps = (dispatch) => ({
  leaderCreate: (leader) => dispatch(leaderActions.leaderCreateRequest(leader)),
  leaderDelete: (leader) => dispatch(leaderActions.leaderDeleteRequest(leader)),
  leadersFetch: () => dispatch(leaderActions.leadersFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
