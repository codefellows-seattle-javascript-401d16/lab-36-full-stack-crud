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
        <ShipForm
          buttonText='create ship'
          onComplete={this.props.shipCreate}
          />

        {this.props.ships.map(ship =>
          <div key={ship._id}>
            <p>Ship name: {ship.name}</p>
            <p>Captain name: {ship.captain}</p>
            <p>Ship type: {ship.type}</p>
            <ShipForm
              buttonText='update'
              ship={ship}
              onComplete= {(data) => {
                data._id = ship._id
                this.props.shipUpdate(data)}}
              />

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

console.log('shipActions shipUpdateRequest', shipActions)
let mapDispatchToProps = (dispatch) => ({
  shipCreate: (ship) => dispatch(shipActions.shipCreateRequest(ship)),
  shipUpdate: (ship) => dispatch(shipActions.shipUpdateRequest(ship)),
  shipDelete: (ship) => dispatch(shipActions.shipDeleteRequest(ship)),
  shipsFetch: () => dispatch(shipActions.shipsFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
