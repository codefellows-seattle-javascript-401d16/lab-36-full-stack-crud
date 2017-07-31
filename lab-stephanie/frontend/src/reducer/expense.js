let initialState = {}

let validatePayload = payload => {
  if (!payload.id || !payload.name || !payload.price || !payload.timestamp)
    throw new Error(
      'VALIDATION ERROR: expense must have id, name, price, and timestamp'
    )
}

export default (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
  case 'CATEGORY_CREATE':
    return { ...state, [payload.id]: [] }

  case 'CATEGORY_DELETE':
    return { ...state, [payload.id]: undefined }

  case 'EXPENSE_CREATE': {
    console.log('expense create after dragndrop')
    let { categoryId } = payload
    let categoryExpenses = [...state[categoryId]]
    return { ...state, [categoryId]: [...categoryExpenses, payload] }
  }
  case 'EXPENSE_UPDATE': {
    validatePayload(payload)
    let { categoryId } = payload
    let categoryExpenses = [...state[categoryId]]
    return {
      ...state,
      [categoryId]: categoryExpenses.map(
        expense => (expense.id == payload.id ? payload : expense)
      ),
    }
  }
  case 'EXPENSE_DELETE': {
    validatePayload(payload)
    let { categoryId } = payload
    let categoryExpenses = [...state[categoryId]]
    return {
      ...state,
      [categoryId]: categoryExpenses.filter(
        expense => expense.id !== payload.id
      ),
    }
  }

  default:
    return state
  }
}
