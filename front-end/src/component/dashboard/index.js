import React from 'react'
import {connect} from 'react-redux'
import BarForm from '../bar-form'
import * as util from '../../lib/util.js'
import * as barActions from '../../action/bar-actions.js'
import BarItem from '../bar-item'
class Dashboard extends React.Component {

  componentWillMount(){
    console.log('this.props',this.props);
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <BarForm
          buttonText='create bar'
          onComplete={this.props.BarCreate}
          />

        {this.props.bars.map(bar =>
          <div key={bar._id}>
          <BarItem bar={bar}/>
            <button
              onClick={() => this.props.barDelete(bar)}>
              delete
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({bars: state.bars})
let mapDispatchToProps = (dispatch) => ({
  BarCreate: (bar) => dispatch(barActions.barCreateRequest(bar)),
  barDelete: (bar) => dispatch(barActions.barDeleteRequest(bar)),
  barsFetch: () => dispatch(barActions.barsFetchRequest()),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
