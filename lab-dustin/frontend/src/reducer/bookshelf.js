let validateBookshelf = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: shelf must have _id');
  if(payload.title)
    throw new Error('VALIDATION ERROR: shelf must have a title');
};

export default (state=[], action) => {
  let {type, payload} = action;
  switch(type) {
  case 'BOOKSHELF_SET':
    return payload;
  case 'BOOKSHELF_CREATE':
    validateBookshelf(payload);
    return [payload, ...state];
  case 'BOOKSHELF_UPDATE':
    validateBookshelf(payload);
    return state.map(item =>
      item._id === payload._id ? payload : item);
  case 'BOOKSHELF_DELETE':
    validateBookshelf(payload);
    return state.filter(item =>
      item._id !== payload._id);
  default:
    return state;
  }
};
