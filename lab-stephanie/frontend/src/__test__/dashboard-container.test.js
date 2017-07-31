import React from 'React'
import { shallow } from 'enzyme'

import DashboardContainer from '../component/dashboard-container'
import createAppStore from '../lib/store.js'

describe('dashboard-container', () => {
  test('it should have a category props', () => {
    let mockStore = createAppStore()
    let wrapper = shallow(<DashboardContainer store={mockStore} />)
    expect(wrapper.props().categories).toEqual({})
  })

  test('it should be able to create categories', () => {
    let mockStore = createAppStore()
    let wrapper = shallow(<DashboardContainer store={mockStore} />)

    expect(wrapper.props().categories).toEqual({})
    wrapper.props().categoryCreate({ title: 'cool' })
    let { categories } = mockStore.getState()
    expect(categories[0].title).toEqual('cool')
  })
})
