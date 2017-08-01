let validateLeader = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: leader must have _id');
  if(!payload.firstName || !payload.lastName || !payload.userName)
    throw new Error('VALIDATION ERROR: leader must have firstName, lastName, and userName');
};

// reducer is only for fontend state
// it canot talk to the database
export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
  case 'LEADER_SET':
    return payload;
  case 'LEADER_CREATE':
    validateLeader(payload);
    return [payload, ...state];
  case 'LEADER_UPDATE':
    validateLeader(payload);
    return state.map(item =>
      item._id === payload._id ? payload : item);
  case 'LEADER_DELETE':
    validateLeader(payload);
    return state.filter(item =>
      item._id !== payload._id);
  default:
    return state;
  }
};
