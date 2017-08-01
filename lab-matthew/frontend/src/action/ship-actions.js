import superagent from 'superagent'

// sync actions
// talk to the redux store
export const shipSet = (ships) => ({
  type: 'SHIP_SET',
  payload: ships,
})

export const shipCreate = (ship) => ({
  type: 'SHIP_CREATE',
  payload: ship,
})

export const shipUpdate = (ship) => ({
  type: 'SHIP_UPDATE',
  payload: ship,
})

export const shipDelete = (ship) => ({
  type: 'SHIP_DELETE',
  payload: ship,
})

// async actions
// talk to the API
export const shipsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/ships`)
  .then(res => {
    dispatch(shipSet(res.body))
    return res
  })
}

export const shipCreateRequest = (ship) => (dispatch) => {
  console.log('CREATE REQUEST', ship)
  return superagent.post(`${__API_URL__}/api/ships`)
  .send(ship)
  .then(res => {
    dispatch(shipCreate(res.body))
    return res
  })
}

export const shipUpdateRequest = (ship) => (dispatch) => {
  console.log('UPDATE REQUEST', ship)
  return superagent.put(`${__API_URL__}/api/ships/${ship._id}`)
  .then(res => {
    dispatch(shipUpdate(ship))
    return res
  })
}

export const shipDeleteRequest = (ship) => (dispatch) => {
  console.log('DELETE REQUEST', ship)
  return superagent.delete(`${__API_URL__}/api/ships/${ship._id}`)
  .then(res => {
    dispatch(shipDelete(ship))
    return res
  })
}
