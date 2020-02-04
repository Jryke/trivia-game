// redux reducer
const initialObj = {
  category: '',
  difficulty: '',
  type: 'multiple',
  number: 10
}

export default (optionsObj = initialObj, action) => {
  if (action.type === 'SET_OPTIONS') {
    return Object.assign({}, optionsObj, action.payload)
  }

  return optionsObj
}