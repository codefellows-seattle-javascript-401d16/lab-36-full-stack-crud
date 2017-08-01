// this middleware lets us make async action creators so we can make
// ajax requests to an API.

export default store => next => action => {
  return typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action);
};
