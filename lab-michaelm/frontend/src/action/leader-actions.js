import uuid from 'uuid/v1';
import superagent from 'superagent';

// sync actions
// talk to the redux store

export const leaderCreate = (leader) => ({
  type: 'LEADER_CREATE',
  payload: {
    ...leader,
  },
});

export const leaderUpdate = (leader) => ({
  type: 'LEADER_UPDATE',
  payload: {...leader},
});

export const leaderDelete = (leader) => ({
  type: 'LEADER_DELETE',
  payload: {...leader},
});

// async actions
// talk to the API

export const leaderCreateRequest = (leader) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/leader`)
    .send(leader)
    .then(res => {
      dispatch(leaderCreate(res.body));
      return res;
    });
};

export const leaderUpdateRequest = (leader) => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/leader/${leader._id}`)
    .then(res => {
      dispatch(leaderUpdate(leader));
      return res;
    });
};

export const leaderDeleteRequest = (leader) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/leader/${leader._id}`)
    .then(res => {
      dispatch(leaderDelete(leader));
      return res;
    });
};
