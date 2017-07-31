let initialState = {}

let validatePayload = payload => {
  if (!payload.id || !payload.name || !payload.budget || !payload.timestamp)
    throw new Error(
      'VALIDATION ERROR: category must have id, name, budget, and timestamp'
    )
}

export default (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
  case 'CATEGORY_CREATE':
    return [...state, payload]
  case 'CATEGORY_UPDATE':
    validatePayload(payload)
    return state.map(
      category => (category.id == payload.id ? payload : category)
    )
  case 'CATEGORY_DELETE':
    validatePayload(payload)
    return state.filter(category => category.id !== payload.id)
  case 'CATEGORY_RESET':
    validatePayload(payload)
    return initialState
  default:
    console.log('default state in category.js', state)
    return state
  }
}
