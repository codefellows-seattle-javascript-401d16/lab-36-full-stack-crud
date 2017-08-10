import React from 'react';
// import TeamList from '../team-list';
import './_team-list.scss';
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
            <div className='team-header'>
              <img className='team-logo' src='somesrcfornow'/>
              <h4 className='team-name'>
                {team.name}
              </h4>
              <h5 className='founded-title'>Founded on: </h5>
              <h6 className='team-founded'>
                {team.founded}
              </h6>
              <button
                onClick={() => this.props.teamDelete(team)}
              >
                  Delete Team
              </button>

            </div>
            <TeamForm
              buttonText='Update Team'
              team={team}
              onComplete={(data) => {
                data._id = team._id;
                this.props.teamUpdate(data);}}
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
  teamUpdate: (team) => dispatch(teamActions.teamUpdateRequest(team)),
  teamsFetch: () => dispatch(teamActions.teamsFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
