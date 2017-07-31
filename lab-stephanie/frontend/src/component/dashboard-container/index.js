import './_dashboard-container.scss'
import React from 'react'
import { connect } from 'react-redux'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'
import { expenseCreate } from '../../action/expense-actions.js'

import CategoryForm from '../category-form-component'
import CategoryItem from '../category-item-component'

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({ name: 'Food', budget: 500 })
    this.props.categoryCreate({ name: 'Car', budget: 500 })
    this.props.categoryCreate({ name: 'Bills', budget: 500 })
    this.props.categoryCreate({ name: 'Entertainment', budget: 500 })
    this.props.categoryCreate({ name: 'loans', budget: 500 })
  }
  render() {
    return (
      <main className="dashboard-container">
        <h2> Budget Tracker </h2>
        <CategoryForm categoryCreate={this.props.categoryCreate} />
        <ul>
          {this.props.categories.map((item, i) => {
            return (
              <li key={i} className="categories">
                <div className="dropzone">
                  <CategoryItem
                    item={item}
                    categoryUpdate={this.props.categoryUpdate}
                    categoryDelete={this.props.categoryDelete}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
