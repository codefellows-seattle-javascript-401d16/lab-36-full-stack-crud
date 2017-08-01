//reducer is only from frontend state
//it cannot talk to the database

export default (state=[], action) => {
  let {type, payload} = action;
  switch (type) {
  case 'TEAM_SET':
    return payload;
  case 'TEAM_CREATE':
    return [payload, ...state];
  case 'TEAM_DELETE':
    return state.filter(item =>
      item._id !== payload._id);
  default:
    return state;
  }
};
