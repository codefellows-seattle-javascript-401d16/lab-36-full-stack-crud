import React from 'react';
import {connect} from 'react-redux';
import TeamForm from '../team-form';
import * as util from '../../lib/util.js';
import * as teamActions from '../../action/team-actions.js';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.teamsFetch();
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <TeamForm
          buttonText='create list'
          onComplete={this.props.teamCreate}
        />

        {this.props.teams.map(team =>
          <div key={team._id}>
            {team.name}
            <button
              onClick={() => this.props.teamDelete(team)}
            >
              Delete Team
            </button>
            <TeamForm
              buttonText='Update Team'
              onComplete={this.props.teamUpdate}
            />
          </div>
        )}

      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  teams: state.teams,
});

let mapDispatchToProps = (dispatch) => ({
  teamCreate: (team) => dispatch(teamActions.teamCreateRequest(team)),
  teamDelete: (team) => dispatch(teamActions.teamDeleteRequest(team)),
  teamsFetch: () => dispatch(teamActions.teamsFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
