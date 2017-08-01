import React from 'react'
import {connect} from 'react-redux'
import CarForm from '../car-form'
import * as util from '../../lib/util.js'
import * as carActions from '../../action/car-actions.js'

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.carsFetch()
  }

  render(){
    return (
      <div className='dashboard'>
        <CarForm
          buttonText='create car'
          onComplete={this.props.carCreate}
          />

        {this.props.cars.map(car =>
          <div key={car._id}>
            <p>Car name: {car.name}</p>
            <p>Captain name: {car.captain}</p>
            <p>Car type: {car.type}</p>
            <CarForm
              buttonText='update'
              car={car}
              onComplete= {(data) => {
                data._id = car._id
                this.props.carUpdate(data)}}
              />

            <button
              onClick={() => this.props.carDelete(car)}>
              delete
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({cars: state.cars})

console.log('carActions carUpdateRequest', carActions)
let mapDispatchToProps = (dispatch) => ({
  carCreate: (car) => dispatch(carActions.carCreateRequest(car)),
  carUpdate: (car) => dispatch(carActions.carUpdateRequest(car)),
  carDelete: (car) => dispatch(carActions.carDeleteRequest(car)),
  carsFetch: () => dispatch(carActions.carsFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)