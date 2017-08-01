let validateTrainer = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: trainer must have _id')
  if(!payload.title)
    throw new Error('VALIDATION ERROR: trainer must have title')
}

export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
  case 'TRAINER_SET':
    return payload
  case 'TRAINER_CREATE':
    validateTrainer(payload)
    return [payload, ...state]
  case 'TRAINER_UPDATE':
    validateTrainer(payload)
    return state.map(item =>
      item._id === payload._id ? payload : item)
  case 'TRAINER_DELETE':
    validateTrainer(payload)
    return state.filter(item =>
      item._id !== payload._id)
  default:
    return state
  }
}
