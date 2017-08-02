import React from 'react'
import {connect} from 'react-redux'
import ListForm from '../list-form'
import * as util from '../../lib/util.js'
import * as listActions from '../../action/list-action.js'

class Dashboard extends React.Component {

  componentWillMount(){
    this.props.listsFetch()
  }

  render(){
    return (
      <div className='dashboard'>
        <ListForm
          buttonText='create list'
          onComplete={this.props.listCreate}
        />

        {this.props.lists.map(list =>
          <div key={list._id}>
            {list.title}
            <ListForm
              buttonText='update list'
              onComplete={(item) => {
                item._id = list._id
                this.props.listUpdate(item)}}
            />
            <button
              onClick={() => this.props.listDelete(list)}>
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
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
  listUpdate: (list) => dispatch(listActions.listUpdateRequest(list)),
  listDelete: (list) => dispatch(listActions.listDeleteRequest(list)),
  listsFetch: () => dispatch(listActions.listsFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
