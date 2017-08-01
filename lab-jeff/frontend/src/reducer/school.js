let validateSchool = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: school must have _id');
  if(!payload.name)
    throw new Error('VALIDATION ERROR: school must have name');
};

// reducer is only for fontend state
// it canot talk to the database
export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
  case 'SCHOOL_SET':
    return payload;
  case 'SCHOOL_CREATE':
    validateSchool(payload);
    return [payload, ...state];
  case 'SCHOOL_UPDATE':
    validateSchool(payload);
    return state.map(item =>
      item._id === payload._id ? payload : item);
  case 'SCHOOL_DELETE':
    validateSchool(payload);
    return state.filter(item =>
      item._id !== payload._id);
  default:
    return state;
  }
};
