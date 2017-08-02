let validateUser = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: user must have _id')
  if(!payload.name)
    throw new Error('VALIDATION ERROR: user must have name')
}

export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
    case 'USER_SET':
      return payload
    case 'USER_CREATE':
      validateUser(payload)
      return [payload, ...state]
    case 'USER_UPDATE':
      validateUser(payload)
      return state.map(item =>
        item._id === payload._id ? payload : item)
    case 'USER_DELETE':
      validateUser(payload)
      return state.filter(item =>
        item._id !== payload._id)
    default:
      return state
  }
}
