import React from 'react'
import {connect} from 'react-redux'
import BandForm from '../band-form'
import ArtistForm from '../artist-form'
import * as util from '../../lib/util.js'
import * as bandActions from '../../action/band-actions.js'

class Dashboard extends React.Component{
  componentWillMount(){
    this.props.bandsFetch()
  }

  render(){
    return(
      <div className='bands'>
        <h2> Bands </h2>
        <BandForm
          buttonText='create band'
          onComplete={this.props.bandCreate}/>

          {this.props.bands.map(band =>
          <div key={band._id}>
            {band.name}
            <button
              onClick={() => this.props.bandDelete(band)}>
              delete
            </button>
          </div>
        )}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({bands: state.bands})
let mapDispatchToProps = (dispatch) => ({
  bandCreate: (band) => dispatch(bandActions.bandCreateRequest(band)),
  bandDelete: (band) => dispatch(bandActions.bandDeleteRequest(band)),
  bandsFetch: () => dispatch(bandActions.bandsFetchRequest()),
})



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
