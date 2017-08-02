let validateYear = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: Year must have ._id');
  if(!payload.name || !payload.days || !payload.dayJan1)
    throw new Error('VALIDATION ERROR: Year requires name, days, and dayJan1 properties');
};

export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){

  case 'YEAR_SET':
    return payload;

  case 'YEAR_CREATE':
    validateYear(payload);
    return [payload, ...state];

  case 'YEAR_UPDATE':
    validateYear(payload);
    return state.map(item =>
      item._id === payload._id ? payload : item);

  case 'YEAR_DELETE':
    validateYear(payload);
    return state.filter(item =>
      item._id !== payload._id);
      
  default:
    return state;
  }
};
