import superagent from 'superagent';

export const placeSet = (places) => ({
  type: 'PLACE_SET',
  payload: places,
});

export const placeCreate = (places) => ({
  type: 'PLACE_CREATE',
  payload: place,
});

export const placesFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/lists`)
    .send(place)
    .then(res => {
      dispatch(placeCreate(res.body));
      return res;
    });
};

export const listCreateRequest = (place) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/places`)
    .send(place)
    .then(res => {
      dispatch(placeCreate(res.body));
      return res;
    });
};
