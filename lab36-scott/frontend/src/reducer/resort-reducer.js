export default (state=[], action) => {
  let {type, payload} = action;

  switch (type) {

  //return just the database payload (array or objects) on dash render
  case 'RESORT_SET':
    return payload;

  case 'RESORT_CREATE':
    return [payload, ...state];

  case 'RESORT_UPDATE':
    return state.map(resort => {
      return resort._id === payload._id ? payload : resort;
    });

  case 'RESORT_DESTROY':
    return state.filter(resort => {
      return resort._id !== payload._id;
    });

  default: return state;

  }
};
