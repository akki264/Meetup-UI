import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import timezoneReducer from './timezoneReducer'

export default combineReducers({
    authReducer,
    userReducer,
    timezoneReducer
})