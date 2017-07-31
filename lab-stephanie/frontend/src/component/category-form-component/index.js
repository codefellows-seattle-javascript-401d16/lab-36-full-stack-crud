import React from 'react'

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

export default CategoryForm
