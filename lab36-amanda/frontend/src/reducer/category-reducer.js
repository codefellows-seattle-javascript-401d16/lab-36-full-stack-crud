let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    return [...state, payload];

  case 'CATEGORY_UPDATE':
    console.log('in reducer item', payload);
    return state.map(category => {
      console.log('in map reducer', category, payload);
      return category.id == payload.id ? payload : category;});

  case 'CATEGORY_DELETE':
    return state.filter(category =>
      category.id !== payload.id);

  case 'CATEGORY_RESET':
    return initialState;

  default:
    return state;
  }
};
