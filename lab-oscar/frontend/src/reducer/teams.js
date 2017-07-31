//reducer is only from frontend state
//it cannot talk to the database

export default (state=[], action) => {
  let {type, payload} = action;
  switch (type) {
  case 'TEAM_SET':
    return payload;
  case 'TEAM_CREATE':
    return [payload, ...state];
  default:
    return state;
  }
};
