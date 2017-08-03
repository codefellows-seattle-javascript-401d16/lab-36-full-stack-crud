import * as util from './util';

export default store => next => action => {
  util.log('__ACTION__', action);
  try{
    let result = next(action);
    util.log('__STATE__', store.getState());
    return result;
  } catch (err){
    err.action = action;
    util.logError;
    return err;
  }
};
