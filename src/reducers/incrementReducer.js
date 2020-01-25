// redux reducer
export default (count = 0, action) => {
  if (action.type === 'INCREMENT') {
    return count + 1
  }
  if (action.type === 'INCREMENT_RESET') {
    return 0
  }

  return count
}