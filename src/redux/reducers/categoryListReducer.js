import * as actionsTypes from '../actions/actionsTypes'
import initialState from './initialState'

export default function changeCategoryReducer(state=initialState.categories, action){
    switch (action.type){
        case actionsTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
       
        default:
            return state;

        
    }
}