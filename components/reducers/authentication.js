import Immutable from 'immutable'
import match from 'rust-match'

export default (state = Immutable.Map({ authenticated: false }), action) => {
  return match(action.type, {
    authenticate: () => state.merge(action),
    _: () => state
  })
}
