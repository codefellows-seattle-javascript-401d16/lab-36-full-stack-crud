import superagent from 'superagent'

export const trainerSet = (trainer) => ({
  type: 'TRAINER_SET',
  payload: trainer,
})

export const trainerCreate = (trainer) => ({
  type: 'TRAINER_CREATE',
  payload: trainer,
})

export const trainerUpdate = (trainer) => ({
  type: 'TRAINER_UPDATE',
  payload: trainer,
})

export const trainerDelete = (trainer) => ({
  type: 'TRAINER_DELETE',
  payload: trainer,
})

export const trainersFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/trainers`)
    .then(res => {
      dispatch(trainerSet(res.body))
      return res
    })
}

export const trainerCreateRequest = (trainer) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/trainers`)
    .send(trainer)
    .then(res => {
      dispatch(trainerCreate(res.body))
      return res
    })
}

export const trainerDeleteRequest = (trainer) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/trainers/${trainer._id}`)
    .then(res => {
      dispatch(trainerDelete(trainer))
      return res
    })
}
