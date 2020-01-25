import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import incrementReducer from './incrementReducer'

// redux combine reducers
export default combineReducers({
  questions: questionsReducer,
  count: incrementReducer
})