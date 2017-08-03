import React from 'react'
import {connect} from 'react-redux'
import BarForm from '../bar-form'
import * as barActions from '../../action/bar-actions.js'
import {
  barUpdate,
  barDelete,
} from '../../action/bar-actions.js'




class BarItem extends React.Component {
  render(){
    let {bar} = this.props
    return (
          <div className='bar-item'>
          <div>
          <div className='content'>
            <p> Title: {bar.name} </p>
            {console.log('this is bar!!',bar)}
            <button
            className='update-button'
            onClick={() =>{
              this.props.barUpdate(bar);
            }}>
              UPDATE
            </button>
          </div>

          {<div className='editing'>
           <BarForm
            bar={bar}
            buttonText='Update Expense'
            onComplete={(data)=> {
              data.id = bar.id;
              this.props.barUpdate(data);
            }}/>
          </div>}
        </div>
      </div>
    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  barUpdate: (bar) => dispatch(barActions.barUpdate(bar)),
  barDelete: (bar) => dispatch(barActions.barDelete(bar)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarItem)
