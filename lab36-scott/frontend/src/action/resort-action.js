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

//this will be invoked in the superagent ajax call in the fetchResorts action below. Which is called immediately on component mount in the dashboard. if anything is in the database it displays the resorts,  still redux
export const resortSet = (resorts) => ({
  type: 'RESORT_SET',
  payload: resorts,
});

//these actions talk to the database API. They are ASYNC
export const resortCreateRequest = (resort) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/resorts`)
    .send(resort)
    .then(res => {
      dispatch(resortCreate(res.body));
      return res;
    });
};

//to retrieve everything in the database.
export const resortFetchAllRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/resorts`)
    .then(res => {
      dispatch(resortSet(res.body));
      return res;
    });
};

//to update a resort via PUT request
export const resortUpdateRequest = (resort) => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/resorts/${resort._id}`)
    .send(resort)
    .then(res => {
      dispatch(resortUpdate(res.body));
      return res;
    });
};

export const resortDestroyRequest = (resort) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/resorts/${resort._id}`)
    .then(res => {
      dispatch(resortDestroy(resort));
      return res;
    });
};
