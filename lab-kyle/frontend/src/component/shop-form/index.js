import React from 'react'

class ShopForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.shop ? props.shop : {name: '', location: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

    }

    render() {
        return (
            <div className='shop-form'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <input
                        name='location'
                        type='text'
                        placeholder='Location'
                        value={this.state.location}
                        onChange={this.handleChange}
                        />
                    <button type='submit'> {this.props.buttonText} </button>
                </form>
            </div>
        )
    }
}

export default ShopForm