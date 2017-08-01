import superagent from 'superagent'

export const shopSet = shops => ({type: 'SHOP_SET', payload: shops,})

export const shopCreate = shop => ({type: 'SHOP_CREATE', payload: shop})

export const shopUpdate = shop => ({type: 'SHOP_UPDATE', payload: shop})

export const shopDelete = shop => ({type: 'SHOP_DELETE', payload: shop})

// async actions

export const shopsFetchRequest = () => (dispatch) => {
    return superagent.get(`${__API_URL__}/api/bikeShops`)
        .then(res => {
            dispatch(shopSet(res.body))
            return res
        })
}

export const shopCreateRequest = (shop) => (dispatch) => {
    return superagent.post(`${__API_URL__}/api/bikeShops`)
        .send(shop)
        .then(res => {
            dispatch(shopCreate(res.body))
            return res
        })
}

export const shopDeleteRequest = (shop) => (dispatch) => {
    return superagent.delete(`${__API_URL__}/api/bikeShops/${shop._id}`)
        .then(res => {
            dispatch(shopDelete(shop))
            return res
        })
}

export const listDeleteRequest = (list) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/lists/${list._id}`)
  .then(res => {
    dispatch(listDelete(list))
    return res
  })
}