import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import incrementReducer from './incrementReducer'
import answerReducer from './answerReducer'

// redux combine reducers
export default combineReducers({
  questions: questionsReducer,
  count: incrementReducer,
  answers: answerReducer
})