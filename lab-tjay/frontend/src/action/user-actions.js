import superagent from 'superagent'

export const userSet = (users) => ({
  type: 'USER_SET',
  payload: users,
})

export const userCreate = (user) => ({
  type: 'USER_CREATE',
  payload: user,
})

export const userUpdate = (user) => ({
  type: 'USER_UPDATE',
  payload: user,
})

export const userDelete = (user) => ({
  type: 'USER_DELETE',
  payload: user,
})

export const usersFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/user`)
  .then(res => {
    dispatch(userSet(res.body))
    return res
  })
}

export const userCreateRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/user`)
  .send(user)
  .then(res => {
    dispatch(userCreate(res.body))
    return res
  })
}

export const userDeleteRequest = (user) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/user/${user._id}`)
  .then(res => {
    dispatch(userDelete(user))
    return res
  })
}
