import { combineReducers } from 'redux'
import auth from './Auth'
import post from './Post'
export default combineReducers({
  auth,
  post
})
