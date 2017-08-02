import React from 'react'
import { connect } from 'react-redux'
import * as categoryActions from '../../action/category-actions.js'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : '',
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
    this.props.categoryCreate(Object.assign({}, this.state))
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          required="true"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="budget"
          type="number"
          placeholder="budget"
          required="true"
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type="submit">add cost category</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  }
}

let mapDispatchToProps = dispatch => ({
  categoryCreate: category =>
    dispatch(categoryActions.categoryCreateRequest(category)),
  categoryDelete: category =>
    dispatch(categoryActions.categoryDeleteRequest(category)),
  categoriesFetch: () => dispatch(categoryActions.categoriesFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)
