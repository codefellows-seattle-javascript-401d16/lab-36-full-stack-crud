import React from 'react';
import {connect} from 'react-redux';
import LeaderForm from '../leader-form';
import * as util from '../../lib/util.js';
import * as leaderActions from '../../action/leader-actions.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      editing: false,
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleLeaderUpdate = this.handleLeaderUpdate.bind(this);
  }

  componentWillMount(){
    this.props.leadersFetch();
  }

  handleLeaderUpdate(leader){
    this.props.leaderUpdate(leader);
    this.setState({editing:false});
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <LeaderForm
          buttonText='Create Leader'
          onComplete={this.props.leaderCreate}
        />

        {this.props.leaders.map(leader =>
          <div className="leader-form" key={leader._id}>
            {util.renderIf(!this.state.editing,
              <div onDoubleClick={() => this.setState({editing:true})}>
                <ul>
                  <li><p>Username: {leader.userName}</p></li>
                  <li><p>First Name: {leader.firstName}</p></li>
                  <li><p>Last Name: {leader.lastName}</p></li>
                </ul>
                <button onClick={() => this.props.leaderDelete(leader)}>Delete Leader</button>
              </div>
            )}
            {util.renderIf(this.state.editing,
              <div onDoubleClick={() => this.setState({editing:false})} key={leader._id}>
                <ul>
                  <li><p>Username: {leader.userName}</p></li>
                  <li><p>First Name: {leader.firstName}</p></li>
                  <li><p>Last Name: {leader.lastName}</p></li>
                </ul>
                <LeaderForm
                  buttonText='Update Leader'
                  onComplete={this.handleLeaderUpdate}
                />
                <button
                  onClick={() => this.setState({editing:false})}>
                Cancel
                </button>
              </div>
            )}
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
  leaderUpdate: (leader) => dispatch(leaderActions.leaderUpdateRequest(leader)),
  leadersFetch: () => dispatch(leaderActions.leadersFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
