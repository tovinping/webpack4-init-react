import * as types from './types'
let category = [
  {
    id: '',
    name: ''
  }
]
export default function(state = category, action) {
  switch(action.type) {
    case types.ADD_CATEGORY:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}