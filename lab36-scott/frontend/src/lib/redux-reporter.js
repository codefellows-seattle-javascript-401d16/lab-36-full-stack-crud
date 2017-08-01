export default (store) => (next) => (action) => {
  console.log('--ACTION--', action);

  try {
    let result = next(action);
    console.log('--STATE-CHANGE--', store.getState());
    return result;
  } catch (err) {
    err.action = action;
    console.log('--ERROR--', err);
    return err;
  }
};
