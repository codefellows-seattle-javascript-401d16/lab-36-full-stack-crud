export default store => next => action =>
  typeof action === 'function'
    ? (store.dispatch, store.getState)
    : next(action);
