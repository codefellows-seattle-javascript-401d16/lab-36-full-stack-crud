import superagent from 'superagent'

// sync actions
// talk to the redux store
export const carSet = (cars) => ({
  type: 'CAR_SET',
  payload: cars,
})

export const carCreate = (car) => ({
  type: 'CAR_CREATE',
  payload: car,
})

export const carUpdate = (car) => ({
  type: 'CAR_UPDATE',
  payload: car,
})

export const carDelete = (car) => ({
  type: 'CAR_DELETE',
  payload: car,
})

// async actions
// talk to the API
export const carsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/cars/`)
  .then(res => {
    dispatch(carSet(res.body))
    return res
  })
}

export const carCreateRequest = (car) => (dispatch) => {
  console.log('CREATE REQUEST', car)
  return superagent.post(`${__API_URL__}/api/cars`)
  .send(car)
  .then(res => {
    console.log('body', res.body)
    dispatch(carCreate(res.body))
    return res
  })
}

export const carUpdateRequest = (car) => (dispatch) => {
  console.log('UPDATE REQUEST', car)
  return superagent.put(`${__API_URL__}/api/cars/${car._id}`)
  .then(res => {
    dispatch(carUpdate(car))
    return res
  })
}

export const carDeleteRequest = (car) => (dispatch) => {
  console.log('DELETE REQUEST', car)
  return superagent.delete(`${__API_URL__}/api/cars/${car._id}`)
  .then(res => {
    dispatch(carDelete(car))
    return res
  })
}