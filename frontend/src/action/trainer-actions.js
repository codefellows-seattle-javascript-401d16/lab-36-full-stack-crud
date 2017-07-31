import superagent from 'superagent'

// sync actions
// talk to the redux store
export const listSet = (lists) => ({
  type: 'LIST_SET',
  payload: lists,
})

export const listCreate = (trainer) => ({
  type: 'LIST_CREATE',
  payload: trainer,
})

export const listUpdate = (trainer) => ({
  type: 'LIST_UPDATE',
  payload: trainer,
})

export const listDelete = (trainer) => ({
  type: 'LIST_DELETE',
  payload: trainer,
})

// async actions
// talk to the API 
export const listsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/lists`)
  .then(res => {
    dispatch(listSet(res.body))
    return res
  })
}

export const listCreateRequest = (trainer) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/lists`)
  .send(trainer)
  .then(res => {
    dispatch(listCreate(res.body))
    return res
  })
}

export const listDeleteRequest = (trainer) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/lists/${trainer._id}`)
  .then(res => {
    dispatch(listDelete(trainer))
    return res
  })
}


