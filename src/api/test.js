import {get, post} from '../common/fetch'
const TEST_GET_URL = 'http://localhost:3001/testGet'
const TEST_POST_URL = 'http://localhost:3001/testPost'
export const testGet = (data, timeout) => {
  return get(TEST_GET_URL, data, timeout)
}

export const testPost = (data, timeout) => { // {'Content-Type': 'application/x-www-form-urlencoded'}
  return post(TEST_POST_URL, data, timeout)
}