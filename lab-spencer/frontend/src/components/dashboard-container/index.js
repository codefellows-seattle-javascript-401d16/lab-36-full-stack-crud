import React from 'react';
import {connect} from 'react-redux';
import {log, logError} from '../../lib/util.js';

import TeamForm from '../team-form';

import {
  teamsFetchRequest,
  teamCreateRequest,
  teamUpdateRequest,
  teamDeleteRequest,
} from '../../action/team-actions.js';

import {
  playersFetchRequest,
  playerCreateRequest,
  playerUpdateRequest,
  playerDeleteRequest,
} from '../../action/player-actions.js';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.teamsFetch();
  }

  render() {
    return (
      <main className='dashboard-container'>
        <h1>Dashboard</h1>
        <TeamForm
          buttonText='Create'
          onComplete={this.props.teamCreate}
        />

        {this.props.teams.map(team =>
          <div key={team._id}>
            {team.city}, {team.state} {team.name}
            <button
              onClick={() => this.props.teamDelete(team)}
            >Delete</button>
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  teamsFetch: () => dispatch(teamsFetchRequest()),
  teamCreate: team => dispatch(teamCreateRequest(team)),
  teamUpdate: team => dispatch(teamUpdateRequest(team)),
  teamDelete: team => dispatch(teamDeleteRequest(team)),
  playersFetch: () => dispatch(playersFetchRequest()),
  playerCreate: player => dispatch(playerCreateRequest(player)),
  playerUpdate: player => dispatch(playerUpdateRequest(player)),
  playerDelete: player => dispatch(playerDeleteRequest(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
