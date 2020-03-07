import questionJSON from '../apis/questionsJSON'

export const fetchQuestions = () => {
  // redux-thunk used to handle async/await with redux
  return async (dispatch, getState) => {
    // console.log('fetchQuestions dispatch', dispatch)
    const options = getState().options
    console.log('fetchQuestions info', options)
    let apiLink = `/api.php?amount=${options.number}`
    if (options.category) {
      apiLink = apiLink.concat('&category=', options.category)
    }
    if (options.difficulty) {
      apiLink = apiLink.concat('&difficulty=', options.difficulty)
    }
    if (options.type) {
      apiLink = apiLink.concat('&type=', options.type)
    }
    

    console.log(apiLink)
    const questionsObj = await questionJSON.get(apiLink)
    // dispatch manually once object is fetched
    dispatch({
      type: 'FETCH_QUESTIONS',
      payload: questionsObj.data.results
    })      
  }
}

export const fetchCategories = () => {
  // redux-thunk used to handle async/await with redux
  return async (dispatch) => {
    const categoriesObj = await questionJSON.get('/api_category.php')
    // dispatch manually once object is fetched
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: categoriesObj.data.trivia_categories
    })
  }
}

export const setQuestionOptions = (optionObj) => {
  return {
    type: 'SET_OPTIONS',
    payload: optionObj
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