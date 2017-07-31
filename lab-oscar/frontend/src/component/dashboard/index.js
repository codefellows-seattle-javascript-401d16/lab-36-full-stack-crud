import React from 'react';
import {connect} from 'react-redux';
// import * as util from '../../lib/util.js';
// import * as teamActions from '../../action/team-actions.js';

class Dashboard extends React.Component {
  // componentWillMount() {
  //   this.props.teamsFetch();
  // }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
}

export default Dashboard;
// let mapStateToProps = (state) => ({
//   teams: state.teams,
// });
//
// let mapDispatchToProps = (dispatch) => ({
//   teamCreate: (team) => dispatch(teamActions.teamCreateRequest(team)),
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Dashboard);
