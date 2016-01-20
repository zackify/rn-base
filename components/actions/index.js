
export function authenticate(action) {
  return {
    type: 'authenticate',
    ...action
  }
}
