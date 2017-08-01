import React from 'react'
import {connect} from 'react-redux'
import TrainerForm from '../trainer-form'
import * as util from '../../lib/util.js'
import * as trainerActions from '../../action/trainer-actions.js'

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.trainersFetch()
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <TrainerForm
          buttonText='create trainer'
          onComplete={this.props.trainerCreate}
        />

        {this.props.trainers.map(trainer =>
          <div key={trainer._id}>
            {trainer.title}
            <button
              onClick={() => this.props.trainerDelete(trainer)}>
              delete
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({trainers: state.trainers})
let mapDispatchToProps = (dispatch) => ({
  trainerCreate: (trainer) => dispatch(trainerActions.trainerCreateRequest(trainer)),
  trainerDelete: (trainer) => dispatch(trainerActions.trainerDeleteRequest(trainer)),
  trainersFetch: () => dispatch(trainerActions.trainersFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
