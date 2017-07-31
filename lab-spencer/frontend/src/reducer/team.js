let validateTeam = payload => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: team must have _id');
  if(!payload.name)
    throw new Error('VALIDATION ERROR: team must have a name');
  if(!payload.city)
    throw new Error('VALIDATION ERROR: team must have a city');
  if(!payload.state)
    throw new Error('VALIDATION ERROR: team must have a state');
};

export default (state = [], action) => {
  let {type, payload} = action;
  switch(type) {
  case 'TEAM_SET':
    return payload;
  case 'TEAM_CREATE':
    validateTeam(payload);
    return [payload, ...state];
  case 'TEAM_UPDATE':
    validateTeam(payload);
    return state.map(team =>
      team._id === payload._id ? payload : team);
  case 'TEAM_DELETE':
    validateTeam(payload);
    return state.filter(team =>
      team._id !== payload._id);
  default:
    return state;
  }
};
