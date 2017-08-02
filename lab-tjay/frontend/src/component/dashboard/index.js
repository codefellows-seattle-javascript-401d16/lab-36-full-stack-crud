import React from 'react'
import {connect} from 'react-redux'
import UserForm from '../user-form'
import * as util from '../../lib/util.js'
import * as userActions from '../../action/user-actions.js'

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.usersFetch()
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <UserForm
          buttonText='create user'
          onComplete={this.props.userCreate}
          />

        {this.props.users.map(user =>
          <div key={user._id}>
            {user.name}
            <button
              onClick={() => this.props.userDelete(user)}>
              delete
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({users: state.users})
let mapDispatchToProps = (dispatch) => ({
  userCreate: (user) => dispatch(userActions.userCreateRequest(user)),
  userDelete: (user) => dispatch(userActions.userDeleteRequest(user)),
  usersFetch: () => dispatch(userActions.usersFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
