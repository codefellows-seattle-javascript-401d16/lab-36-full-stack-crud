import React from 'react'
import { mount } from 'enzyme'
import ExpenseForm from '../component/expense-component/expense-form-component'
import { Provider } from 'react-redux'
import createAppStore from '../lib/store.js'

describe('testing ExpenseForm', () => {
  test('onComplete should be invoked with the state onSubmit', () => {
    let mockHandleOnComplete = jest.fn()

    let wrapper = mount(
      <ExpenseForm onComplete={mockHandleOnComplete} store={createAppStore()} />
    )

    let mockState = { name: 'car', price: 500 }
    wrapper.setState(mockState)

    wrapper.find('form').simulate('submit')

    let { calls } = mockHandleOnComplete.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toEqual(mockState)
  })

  test('testing onchange should update the name on the state', () => {
    let wrapper = mount(
      <ExpenseForm onComplete={() => {}} store={createAppStore()} />
    )
    wrapper.find('input').first().simulate('change', {
      target: { name: 'name', value: 'car', type: 'text' },
    })
    expect(wrapper.state('name')).toEqual('car')
  })
})
