import * as types from './types'
export const addUser = (data) => {
  return {
    type: types.ADD_USER,
    data
  }
}
export const getUserAndAdd = (id) => {
  return (dispatch, getState) => {
    const {user} = getState()
    console.log(user)
    let newUser = {name: 'AsyncUser', sex: '人妖'}
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dispatch(addUser(newUser)))
      }, 2000);
    })
  }
}