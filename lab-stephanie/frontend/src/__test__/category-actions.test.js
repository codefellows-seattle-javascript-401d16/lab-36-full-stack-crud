import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../action/category-actions.js'

describe('testing category actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({ name: 'rent', budget: 500 })
    expect(action.type).toEqual('CATEGORY_CREATE')
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.timestamp).toBeTruthy()
    expect(action.payload.name).toBe('rent')
    expect(action.payload.budget).toBe(500)
  })

  test('categoryDelete returns a CATEGORY_DELETE action', () => {
    let mockCategory = {
      id: 'ksjfdksjdgh',
      timestamp: new Date(),
      name: 'rent',
      budget: 500,
    }
    let action = categoryDelete(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: mockCategory,
    })
  })

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let mockCategory = {
      id: 'sdfkjashf',
      timestamp: new Date(),
      name: 'rent',
      budget: 500,
    }
    let action = categoryUpdate(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: mockCategory,
    })
  })
})
