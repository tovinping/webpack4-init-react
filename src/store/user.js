import * as types from './types'
let user = [
  {
    name: '初始化',
    sex: '男'
  }
]
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