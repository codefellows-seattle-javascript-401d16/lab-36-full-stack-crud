import React from 'react'
import {connect} from 'react-redux'

import ShopForm from '../shop-form'
import * as shopActions from '../../action/shop-actions.js'

class Dashboard extends React.Component{

    componentWillMount() {
        this.props.shopsFetch
    }

    render() {
        return (
            <div className='dashboard'>
                <h2> Dash </h2>
                <ShopForm buttonText='Submit' onComplete={this.props.shopCreate} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({lists: state.shops})
let mapDispatchToProps = (dispatch) => ({
  shopCreate: (shop) => dispatch(shopActions.shopCreateRequest(shop)),
  shopDelete: (shop) => dispatch(shopActions.shopDeleteRequest(shop)),
  shopsFetch: () => dispatch(shopActions.shopsFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)