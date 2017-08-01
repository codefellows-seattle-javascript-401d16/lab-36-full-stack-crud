import React from 'react'

class ShopForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.shop ? props.shop : {name: '', location: ''}

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        let {onComplete} = this.props
        console.log('handle submit')
        let result = onComplete(this.state)
        if(result instanceof Promise){
            result.then(() => this.setState({error: null}))
                .catch(error=> {
                     util.log('ListForm Error:', error)
                     this.setState({error})
                 })
        } 
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
                        onChange={this.handleNameChange}
                        />
                    <input
                        name='location'
                        type='text'
                        placeholder='Location'
                        value={this.state.location}
                        onChange={this.handleLocationChange}
                        />
                    <button type='submit'> {this.props.buttonText} </button>
                </form>
            </div>
        )
    }
}

export default ShopForm