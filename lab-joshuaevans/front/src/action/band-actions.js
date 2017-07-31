import superagent from 'superagent'


export const bandSet = (band) => ({
  type: 'BAND_SET',
  payload: band,
})

export const bandCreate = (band) => ({
  type: 'BAND_CREATE',
  payload: band,
})

export const bandUpdate = (band) => ({
  type: 'BAND_UPDATE',
  payload: band,
})

export const bandDelete = (band) => ({
  type: 'BAND_DELETE',
  payload: band,
})

export const bandsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/bands`)
  .then(res => {
    dispatch(bandSet(res.body))
    return res
  })
}

export const bandCreateRequest = (band) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/bands`)
  .send(band)
  .then(res => {
    dispatch(bandCreate(res.body))
    return res
  })
}

export const bandDeleteRequest = (band) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/bands/${band._id}`)
  .then(res => {
    dispatch(bandDelete(band))
    return res
  })
}
