// redux reducer
export default (answers = [], action) => {
  if (action.type === 'LOG_ANSWER') {
    return [...answers, action.payload]
  }

  return answers
}