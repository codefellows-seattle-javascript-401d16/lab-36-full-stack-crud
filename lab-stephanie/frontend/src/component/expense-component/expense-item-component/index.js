import React from 'react'
import { connect } from 'react-redux'
import Draggable from '../../draggable'

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
  expenseInsert,
} from '../../../action/expense-actions.js'

let renderIf = (t, c) => (t ? c : undefined)
class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.item.name,
      price: this.props.item.price,
      updateExpenseItem: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateCostItem = this.handleUpdateCostItem.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if (e.target.name == 'name') {
      this.props.item.name = e.target.value
      this.props.item.updated = new Date()
    }
    if (e.target.name == 'price') {
      this.props.item.price = e.target.value
      this.props.item.updated = new Date()
    }
  }

  handleUpdateCostItem() {
    this.setState(state => ({ updateExpenseItem: !state.updateExpenseItem }))
  }

  render() {
    return (
      <div onDoubleClick={this.handleUpdateCostItem}>
        {renderIf(
          this.state.updateExpenseItem,
          <div className="price-item-update">
            <input
              name="name"
              type="text"
              value={this.props.item.name}
              onChange={this.handleChange}
              onBlur={() => this.props.expenseUpdate(this.props.item)}
            />
            <input
              name="price"
              type="number"
              value={this.props.item.price}
              onChange={this.handleChange}
              onBlur={() => {
                this.props.expenseUpdate(this.props.item)
                this.setState({ updateExpenseItem: false })
              }}
            />
          </div>
        )}

        {renderIf(
          !this.state.updateExpenseItem,
          <Draggable dataTransferItem={this.props.item}>
            <div key={this.props.item.id}>
              <h3>
                Expense Name:{this.props.item.name}
              </h3>
              <h3>
                Item price: {this.props.item.price}
              </h3>
              <h3>
                Last Updated: {this.props.item.timestamp.toString()}
              </h3>
              <button
                onClick={() => this.props.expenseDelete(this.props.item)}
                className="note-item-delete"
              >
                x
              </button>
            </div>
          </Draggable>
        )}
      </div>
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
    expenseCreate: expense => {
      dispatch(expenseCreate(expense))
    },
    expenseUpdate: expense => {
      dispatch(expenseUpdate(expense))
    },
    expenseDelete: expense => {
      dispatch(expenseDelete(expense))
    },
    expenseInsert: expense => {
      dispatch(expenseInsert(expense))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
