import * as types from './types'
let user = []
export default function(state = user, action) {
  switch(action.type) {
    case types.ADD_USER:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}