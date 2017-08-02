import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../expense-component/expense-form-component'
import ExpenseItem from '../expense-component/expense-item-component'
import Dropzone from '../dropzone'
import * as categoryActions from '../../action/category-actions.js'
import * as expenseActions from '../../action/expense-actions.js'

let renderIf = (t, c) => (t ? c : undefined)

let expenseDoesExist = false

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.item.name,
      budget: this.props.item.budget,
      updateCategory: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this)
    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this)
  }
  handleDropzoneComplete(err, expense) {
    if (err) return console.error(err)

    this.props.expenseDelete(expense)
    expense.categoryId = this.props.item.id

    this.props.expenseInsert(expense)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if (e.target.name == 'name') {
      this.props.item.name = e.target.value
      this.props.item.updated = new Date()
    }
    if (e.target.name == 'budget') {
      this.props.item.budget = e.target.value
      this.props.item.updated = new Date()
    }
  }

  handleUpdateCategory() {
    this.setState(state => ({ updateCategory: !state.updateCategory }))
  }

  render() {
    let categoryId = this.props.item.id
    return (
      <div className="container">
        <Dropzone onComplete={this.handleDropzoneComplete}>
          <div onDoubleClick={this.handleUpdateCategory}>
            {renderIf(
              this.state.updateCategory,
              <div className="budget-item-update">
                <input
                  name="name"
                  type="text"
                  value={this.props.item.name}
                  onChange={this.handleChange}
                  onBlur={() => this.props.categoryUpdate(this.props.item)}
                />
                <input
                  name="budget"
                  type="number"
                  value={this.props.item.budget}
                  onChange={this.handleChange}
                  onBlur={() => {
                    this.props.categoryUpdate(this.props.item)
                    this.setState({ updateCategory: false })
                  }}
                />
              </div>
            )}

            {renderIf(
              !this.state.updateCategory,
              <div key={this.props.item.id}>
                <h3>
                  Category: {this.props.item.name}
                </h3>
                <h3>
                  Budget: {this.props.item.budget}
                </h3>
                <button
                  onClick={() => this.props.categoryDelete(this.props.item)}
                  className="note-item-delete"
                >
                  x
                </button>
                <ExpenseForm
                  onComplete={data => {
                    data.categoryId = this.props.item.id
                    this.props.expenseCreate(data)
                    expenseDoesExist = true
                  }}
                />
              </div>
            )}
          </div>
          {renderIf(
            expenseDoesExist,
            <ul id="category-expenses">
              {this.props.expenses[categoryId].map((item, i) => {
                return (
                  <li key={item.id}>
                    <ExpenseItem
                      item={item}
                      expenseUpdate={this.props.categoryUpdate}
                      expenseDelete={this.props.categoryDelete}
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </Dropzone>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
