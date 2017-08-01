import superagent from 'superagent';

//sync actions
//talk to the redux store
export const teamSet = (teams) => ({
  type: 'LIST_SET',
  payload: teams,
});

export const teamCreate = (team) => ({
  type: 'TEAM_CREATE',
  payload: team,
});

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
