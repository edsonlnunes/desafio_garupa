export function mainReducer(state = {}, action) {
  if (action.type === 'LOAD') {
    return action.data;
  }
  return state;
}