import Immutable from 'immutable'

export default (state = Immutable.Map({ authenticated: false }), action) => {
  console.log(action)
  switch (action.type) {
    case 'authentication':
      delete action.type
      return Immutable.Map(action)
    case 'authenticate':
      return state.set('authenticated', action.authenticated)
    default:
      return state
  }
}
