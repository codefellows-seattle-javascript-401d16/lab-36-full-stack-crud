import React from 'react'
import {connect} from 'react-redux'

class Band extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='bands'>
        <h2> Bands </h2>
      </div>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
