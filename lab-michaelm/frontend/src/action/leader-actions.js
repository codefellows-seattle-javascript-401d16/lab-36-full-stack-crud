// import dotenv from 'dotenv';
// dotenv.config({path: `${__d1irname}/../.env`});
import superagent from 'superagent';

// sync actions
// talk to the redux store
export const leaderSet = (leaders) => ({
  type: 'LEADER_SET',
  payload: leaders,
});

export const leaderCreate = (leader) => ({
  type: 'LEADER_CREATE',
  payload: leader,
});

export const leaderUpdate = (leader) => ({
  type: 'LEADER_UPDATE',
  payload: leader,
});

export const leaderDelete = (leader) => ({
  type: 'LEADER_DELETE',
  payload: leader,
});

// async actions
// talk to the API
export const leadersFetchRequest = () => (dispatch) => {
  return superagent.get(`http://localhost:7000/api/leaders`)
    .then(res => {
      dispatch(leaderSet(res.body));
      return res;
    });
};

export const leaderCreateRequest = (leader) => (dispatch) => {
  return superagent.post(`http://localhost:7000/api/leaders`)
    .send(leader)
    .then(res => {
      dispatch(leaderCreate(res.body));
      return res;
    });
};

export const leaderDeleteRequest = (leader) => (dispatch) => {
  return superagent.delete(`http://localhost:7000/api/leaders/${leader._id}`)
    .then(res => {
      dispatch(leaderDelete(leader));
      return res;
    });
};
