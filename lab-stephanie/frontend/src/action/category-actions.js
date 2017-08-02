import uuid from 'uuid/v1'
import superagent from 'superagent'

export const categorySet = categories => ({
  type: 'CATEGORY_SET',
  payload: categories,
})

export const categoryCreate = category => {
  category.id = uuid()
  category.timestamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}
export const categoryUpdate = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = category => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryReset = () => ({
  type: 'CATEGORY_RESET',
})

export const categoriesFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/categories`).then(res => {
    dispatch(categorySet(res.body))
    return res
  })
}

export const categoryCreateRequest = category => dispatch => {
  return superagent
    .post(`${__API_URL__}/api/categories`)
    .send(category)
    .then(res => {
      dispatch(categoryCreate(res.body))
      return res
    })
}

export const categoryDeleteRequest = category => dispatch => {
  return superagent
    .delete(`${__API_URL__}/api/categories/${category._id}`)
    .then(res => {
      dispatch(categoryDelete(category))
      return res
    })
}

export const categoryUpdateRequest = category => dispatch => {
  return superagent
    .put(`${__API_URL__}/api/categories/${category._id}`)
    .send(category)
    .then(res => {
      dispatch(categoryUpdate(category))
      return res
    })
}
