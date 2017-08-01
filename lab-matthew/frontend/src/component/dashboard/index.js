import React from 'react'
import {connect} from 'react-redux'
import ShipForm from '../ship-form'
import * as util from '../../lib/util.js'
import * as shipActions from '../../action/ship-actions.js'

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.shipsFetch()
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <ShipForm
          buttonText='create ship'
          onComplete={this.props.shipCreate}
          />

        {this.props.ships.map(ship =>
          <div key={ship._id}>
            {ship.name}
            {ship.captain}
            {ship.type}
            <button
              onClick={() => this.props.shipDelete(ship)}>
              delete
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({ships: state.ships})
let mapDispatchToProps = (dispatch) => ({
  shipCreate: (ship) => dispatch(shipActions.shipCreateRequest(ship)),
  shipDelete: (ship) => dispatch(shipActions.shipDeleteRequest(ship)),
  shipsFetch: () => dispatch(shipActions.shipsFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
