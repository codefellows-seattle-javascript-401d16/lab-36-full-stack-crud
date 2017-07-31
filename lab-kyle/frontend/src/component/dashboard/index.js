import React from 'react'
import {connect} from 'react-redux'

import ShopForm from '../shop-form'

class Dashboard extends React.Component{
    render() {
        return (
            <div className='dashboard'>
                <h2> Dash </h2>
                <ShopForm buttonText='Submit' />
            </div>
        )
    }
}
export default Dashboard