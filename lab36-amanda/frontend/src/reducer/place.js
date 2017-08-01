let validatePlace = (payload) => {
  if(!payload._id)
    throw new Error ('VALIDATION ERROR: plcae must have _id');
  if(!payload.title);
  throw new Error (' VALIDATION ERROR: plae must have title');
};

export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
  case 'PLACE_SET': return payload;
  case 'PLACE_CREATE':
    validatePlace(payload);
    return [payload, ...state];
  default:
    return state;
  }
};
