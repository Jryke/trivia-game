import questionJSON from '../apis/questionsJSON'

export const fetchQuestions = () => {
  // redux-thunk used to handle async/await with redux
  return async (dispatch) => {
    const questionsObj = await questionJSON.get('/api.php?amount=10&difficulty=hard&type=boolean')
    // dispatch manually once object is fetched
    dispatch({
      type: 'FETCH_QUESTIONS',
      payload: questionsObj.data.results
    })      
  }
}

export const questionIncrement = () => {
  return {
    type: 'INCREMENT'
  }
}

export const incrementReset = () => {
  return {
    type: 'INCREMENT_RESET',
  }
}

export const logAnswer = (answerObj) => {
  return {
    type: 'LOG_ANSWER',
    payload: answerObj
  }
}

export const answersReset = () => {
  return {
    type: 'ANSWERS_RESET',
  }
}