import * as actionsTypes from '../actions/actionsTypes'
import initialState from './initialState'

export default function changeCategoryReducer(state=initialState.currentCategory, action){
    switch (action.type){
        case actionsTypes.CHANGE_CATEGORY:
            return action.payload
       
        default:
            return state;

        
    }
}