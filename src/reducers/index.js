import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import incrementReducer from './incrementReducer'
import answerReducer from './answerReducer'
import categoriesReducer from './categoriesReducer'
import optionsReducer from './optionsReducer'

// redux combine reducers
export default combineReducers({
  categories: categoriesReducer,
  questions: questionsReducer,
  count: incrementReducer,
  answers: answerReducer,
  options: optionsReducer
})