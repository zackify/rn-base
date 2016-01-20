import Immutable from 'immutable'

export default (state = Immutable.Map({ authenticated: false }), action) => {
  switch(action.type) {
    case 'authenticate':
      delete action.type
      return state.merge(action)
    default:
      return state
  }
}
