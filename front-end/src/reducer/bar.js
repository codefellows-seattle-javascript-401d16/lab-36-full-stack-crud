let validateList = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: bar must have _id')
  if(!payload.name)
    throw new Error('VALIDATION ERROR: bar must have title')
}

export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
    case 'BAR_SET':
      return payload
    case 'BAR_CREATE':
      validateList(payload)
      return [payload, ...state]
    case 'BAR_UPDATE':
      validateList(payload)
      return state.map(item =>
        item._id === payload._id ? payload : item)
    case 'BAR_DELETE':
      validateList(payload)
      return state.filter(item =>
        item._id !== payload._id)
    default:
      return state
  }
}
