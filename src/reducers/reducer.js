export const DEFAULT_STATE = {
  helloWorld: 'initial state'
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'REDUCER':
      return Object.assign({}, state, { helloWorld: action.value }) 
  }
  return state
}