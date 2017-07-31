import React from 'react'
import {connect} from 'react-redux'
import ListForm from '../trainer-form'
import * as util from '../../lib/util.js'
import * as listActions from '../../action/trainer-actions.js'

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.listsFetch()
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <ListForm
          buttonText='create trainer'
          onComplete={this.props.listCreate}
        />

        {this.props.lists.map(trainer =>
          <div key={trainer._id}>
            {trainer.title}
            <button
              onClick={() => this.props.listDelete(trainer)}>
              delete
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({lists: state.lists})
let mapDispatchToProps = (dispatch) => ({
  listCreate: (trainer) => dispatch(listActions.listCreateRequest(trainer)),
  listDelete: (trainer) => dispatch(listActions.listDeleteRequest(trainer)),
  listsFetch: () => dispatch(listActions.listsFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
