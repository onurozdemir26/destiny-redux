import { combineReducers } from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import 'alertifyjs/build/css/alertify.min.css'


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default rootReducer;