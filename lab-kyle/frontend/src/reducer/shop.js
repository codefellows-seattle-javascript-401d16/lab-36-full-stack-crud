export default (state=[], action) => {
    let {type, payload} = action

    switch(type) {

        case 'SHOP_SET':
        return payload

        case 'SHOP_CREATE':
        return [...state, payload]

        case 'SHOP_UPDATE':
        return state.map(shop => shop._id === payload._id ? payload : shop)

        case 'SHOP_DELETE':
        return state.filter(shop => shop._id !== payload._id)

        default:
        return state
    }
}