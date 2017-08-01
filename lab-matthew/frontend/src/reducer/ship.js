let validateShip = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: ship must have _id')
  if(!payload.name)
    throw new Error('VALIDATION ERROR: ship must have name')
}

// reducer is only for fontend state
// it canot talk to the database
export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
  case 'SHIP_SET':
    return payload
  case 'SHIP_CREATE':
    validateShip(payload)
    return [payload, ...state]
  case 'SHIP_UPDATE':
    validateShip(payload)
    return state.map(item =>
      item._id === payload._id ? payload : item)
  case 'SHIP_DELETE':
    validateShip(payload)
    return state.filter(item =>
      item._id !== payload._id)
  default:
    return state
  }
}
