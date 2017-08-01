export default (state=[], action) => {
  let {type, payload} = action;

  switch (type) {
  case 'RESORT_CREATE':
    return [payload, ...state];

  case 'RESORT_UPDATE':
    return state.map(resort => {
      return resort._id === payload._id ? resort : payload;
    });

  case 'RESORT_DESTROY':
    return state.filter(resort => {
      return resort._id !== payload._id;
    });

  default: return state;

  }
};
