let validateCar = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: car must have _id')
  if(!payload.name)
    throw new Error('VALIDATION ERROR: car must have name')
}

// reducer is only for fontend state
// it canot talk to the database
export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
  case 'SHIP_SET':
    return payload
  case 'SHIP_CREATE':
    validateCar(payload)
    return [payload, ...state]
  case 'SHIP_UPDATE':
    validateCar(payload)
    return state.map(item =>
      item._id === payload._id ? payload : item)
  case 'SHIP_DELETE':
    validateCar(payload)
    return state.filter(item =>
      item._id !== payload._id)
  default:
    return state
  }
}