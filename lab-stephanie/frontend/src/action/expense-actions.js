import uuid from 'uuid/v1'
import superagent from 'superagent'

export const categorySet = categories => ({
  type: 'CATEGORY_SET',
  payload: categories,
})

export const expenseCreate = expense => {
  expense.id = uuid()
  expense.timestamp = new Date()
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  }
}
export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const expenseDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
})

export const expenseReset = () => ({
  type: 'EXPENSE_RESET',
})

export const expenseInsert = expense => ({
  type: 'EXPENSE_CREATE',
  payload: { ...expense },
})

export const expensesFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/expenses`).then(res => {
    dispatch(categorySet(res.body))
    return res
  })
}

export const expenseCreateRequest = expense => dispatch => {
  return superagent
    .post(`${__API_URL__}/api/expenses`)
    .send(expense)
    .then(res => {
      dispatch(expenseCreate(res.body))
      return res
    })
}

export const expenseDeleteRequest = expense => dispatch => {
  return superagent
    .delete(`${__API_URL__}/api/expenses/${expense._id}`)
    .then(res => {
      dispatch(expenseDelete(expense))
      return res
    })
}
export const expenseUpdateRequest = expense => dispatch => {
  return superagent
    .put(`${__API_URL__}/api/expenses/${expense._id}`)
    .send(expense)
    .then(res => {
      dispatch(expenseUpdate(expense))
      return res
    })
}
export const expenseInsertRequest = expense => dispatch => {
  return superagent
    .put(`${__API_URL__}/api/expenses/${expense._id}`)
    .send(expense)
    .then(res => {
      dispatch(expenseInsert(expense))
      return res
    })
}
