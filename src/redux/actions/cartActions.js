import * as actionTypes from './actionsTypes'

export function addToCart(cartItem){
    return {type: actionTypes.ADD_TO_CART, payload: cartItem}
}

export function removeFromCart(product){
    return {type: actionTypes.REMOVE_FROM_CART, payload: product}
}