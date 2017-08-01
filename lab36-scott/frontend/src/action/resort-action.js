import superagent from 'superagent';

//these actions talk to the redux store
export const resortCreate = (resort) => ({
  type: 'RESORT_CREATE',
  payload: resort,
});

export const resortUpdate = (resort) => ({
  type: 'RESORT_UPDATE',
  payload: resort,
});

export const resortDestroy = (resort) => ({
  type: 'RESORT_DESTROY',
  payload: resort,
});

//if anything is in the database, run this action to display all resorts. redux

export const resortSet = (resorts) => ({
  type: 'RESORT_SET',
  payload: resorts,
});

//these actions talk to the database API
