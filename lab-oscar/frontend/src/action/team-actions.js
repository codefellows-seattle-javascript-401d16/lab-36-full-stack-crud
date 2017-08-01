import superagent from 'superagent';

//sync actions
//talk to the redux store
export const teamSet = (teams) => ({
  type: 'TEAM_SET',
  payload: teams,
});

export const teamCreate = (team) => ({
  type: 'TEAM_CREATE',
  payload: team,
});

export const teamDelete = (team) => ({
  type: 'TEAM_DELETE',
  payload: team,
});

export const teamUpdate = (team) => ({
  type: 'TEAM_UPDATE',
  payload: team,
})

//async actions
//talk to the API_URL
export const teamsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/teams`)
    .then(res => {
      dispatch(teamSet(res.body));
      return res;
    });
};

export const teamCreateRequest = (team) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/teams`)
    .send(team)
    .then(res => {
      dispatch(teamCreate(res.body));
      return res;
    });
};

export const teamDeleteRequest = (team) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/teams/${team._id}`)
    .then(res => {
      dispatch(teamDelete(team));
      return res;
    });
};
export const teamUpdateRequest = (team) => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/teams/${team._id}`)
    .then(res => {
      dispatch(teamUpdate(team));
      return res;
    });
};
