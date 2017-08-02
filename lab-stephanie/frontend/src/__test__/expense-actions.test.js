import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../action/expense-actions.js'

describe('testing expense actions', () => {
  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let action = expenseCreate({ name: 'rent', price: 500 })
    expect(action.type).toEqual('EXPENSE_CREATE')
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.timestamp).toBeTruthy()
    expect(action.payload.name).toBe('rent')
    expect(action.payload.price).toBe(500)
  })

  test('expenseDelete returns a EXPENSE_DELETE action', () => {
    let mockCategory = {
      id: '983749q87',
      timestamp: new Date(),
      name: 'rent',
      price: 500,
    }
    let action = expenseDelete(mockCategory)
    expect(action).toEqual({
      type: 'EXPENSE_DELETE',
      payload: mockCategory,
    })
  })

  test('expenseUpdate returns a EXPENSE_UPDATE action', () => {
    let mockCategory = {
      id: 'ashfaksjfh',
      timestamp: new Date(),
      name: 'rent',
      price: 500,
    }
    let action = expenseUpdate(mockCategory)
    expect(action).toEqual({
      type: 'EXPENSE_UPDATE',
      payload: mockCategory,
    })
  })
})
