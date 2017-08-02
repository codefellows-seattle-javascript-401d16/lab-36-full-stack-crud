import React from 'react'
import { connect } from 'react-redux'
import * as categoryActions from '../../../action/category-actions.js'
import * as expenseActions from '../../../action/expense-actions.js'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete({ ...this.state })
  }

  render() {
    let { expenses, categoryId } = this.props
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          required="true"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="price"
          required="true"
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type="submit">add cost item</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    expense: state.expense,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: expense => {
      dispatch(expenseActions.expenseCreateRequest(expense))
    },
    expenseUpdate: expense => {
      dispatch(expenseActions.expenseUpdateRequest(expense))
    },
    expenseDelete: expense => {
      dispatch(expenseActions.expenseDeleteRequest(expense))
    },
    expenseInsert: expense => {
      dispatch(expenseActions.expenseInsertRequest(expense))
    },
    categoryUpdate: category => {
      dispatch(categoryActions.categoryUpdateRequest(category))
    },
    categoryDelete: category => {
      dispatch(categoryActions.categoryDeleteRequest(category))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)
