import superagent from 'superagent'

// sync actions
// talk to the redux store
export const barSet = (bars) => ({
  type: 'BAR_SET',
  payload: bars,
})

export const barCreate = (bar) => ({
  type: 'BAR_CREATE',
  payload: bar,
})

export const barUpdate = (bar) => ({
  type: 'BAR_UPDATE',
  payload: bar,
})

export const barDelete = (bar) => ({
  type: 'BAR_DELETE',
  payload: bar,
})

// async actions
// talk to the API
export const barsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/bars`)
  .then(res => {
    dispatch(barSet(res.body))
    return res
  })
}

export const barCreateRequest = (bar) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/bars`)
  .send(bar)
  .then(res => {
    dispatch(barCreate(res.body))
    return res
  })
}

export const barDeleteRequest = (bar) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/bars/${bar._id}`)
  .then(res => {
    dispatch(barDelete(bar))
    return res
  })
}

export const barUpdateRequest = (bar) => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/bars/${bar._id}`)
  .send({name:bar.name})
  .then(res => {
    dispatch(barUpdate(bar))
    return res
  })
}
