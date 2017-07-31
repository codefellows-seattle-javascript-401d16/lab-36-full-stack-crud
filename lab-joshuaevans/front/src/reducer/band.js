let validateBand = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: band must have _id')
  if(!payload.name)
    throw new Error('VALIDATION ERROR: band must have name')
}

export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
    case 'BAND_SET':
      return payload
    case 'BAND_CREATE':
      validateBand(payload)
      return [payload, ...state]
    case 'BAND_UPDATE':
      validateBand(payload)
      return state.map(item =>
        item._id === payload._id ? payload : item)
    case 'BAND_DELETE':
      return state.filter(item =>
        item._id !== payload._id)
    default:
      return state
  }
}
