import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'

// redux combine reducers
export default combineReducers({
  questions: questionsReducer
})