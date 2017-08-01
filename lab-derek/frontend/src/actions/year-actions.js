import superagent from 'superagent';

const API_URL = process.env.API_URL;

export const yearSet = (years) => ({
  type: 'YEAR_SET',
  payload: years,
});

export const yearCreate = (year) => ({
  type: 'YEAR_CREATE',
  payload: year,
});

export const yearUpdate = (year) => ({
  type: 'YEAR_UPDATE',
  payload: year,
});

export const yearDelete = (year) => ({
  type: 'YEAR_DELETE',
  payload: year,
});

export const yearFetchRequest = () => (dispatch) => {
  return superagent.get(`${API_URL}/api/years`)
    .then(res => {
      dispatch(yearSet(res.body))
      return res;
    });
};

export const yearCreateRequest = (year) => (dispatch, getState) => {
  return superagent.post(`${API_URL}/api/years`)
    .send(year)
    .then(res => {
      dispatch(yearCreate(res.body));
      return res;
    });
};

export const yearDeleteRequest = (year) => (dispatch) => {
  return superagent.delete(`${API_URL}/api/lists/${year._id}`)
    .then(res => {
      dispatch(yearDelete(year));
      return res;
    });
};
