import * as actionTypes from '../actions/actionsTypes'
import initialState from './initialState'

export default function cartReducer(state = initialState.cart, action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const addedItem = state.find(c => c.product.id === action.payload.product.id);
            if(addedItem){
                const newState = state.map(cartItem => {
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({}, addedItem, {quantity:addedItem.quantity+1})
                    }
                    return cartItem;
                })
                return newState;
                
            }else{
                return [...state,{...action.payload}]
            }
            case actionTypes.REMOVE_FROM_CART:
                const newState1 = state.filter(cartItem => cartItem.product.id !== action.payload.id)
                return newState1;
    
        default:
            return state;
    }
}