import superagent from 'superagent';

// sync actions
// talk to the redux store
export const schoolSet = (schools) => ({
  type: 'SCHOOL_SET',
  payload: schools,
});

export const schoolCreate = (school) => ({
  type: 'SCHOOL_CREATE',
  payload: school,
});

export const schoolUpdate = (school) => ({
  type: 'SCHOOL_UPDATE',
  payload: school,
});

export const schoolDelete = (school) => ({
  type: 'SCHOOL_DELETE',
  payload: school,
});

// async actions
// talk to the API
export const schoolsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/schools`)
    .then(res => {
      dispatch(schoolSet(res.body));
      return res;
    });
};

export const schoolCreateRequest = (school) => (dispatch) => {
  console.log('CREATE REQUEST', school);
  return superagent.post(`${__API_URL__}/api/schools`)
    .send(school)
    .then(res => {
      dispatch(schoolCreate(res.body));
      return res;
    });
};

export const schoolUpdateRequest = (school) => (dispatch) => {
  console.log('UPDATE REQUEST', school);
  return superagent.put(`${__API_URL__}/api/schools/${school._id}`)
    .then(res => {
      dispatch(schoolUpdate(school));
      return res;
    });
};

export const schoolDeleteRequest = (school) => (dispatch) => {
  console.log('DELETE REQUEST', school);
  return superagent.delete(`${__API_URL__}/api/schools/${school._id}`)
    .then(res => {
      dispatch(schoolDelete(school));
      return res;
    });
};
