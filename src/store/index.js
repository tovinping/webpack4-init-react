import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import category from './category'
import user from './user'

const loggerMiddleware = createLogger()

const middlewareList = process.env.NODE_ENV !== 'production' ?
[thunkMiddleware, loggerMiddleware] : [thunkMiddleware]
let rootReducer = combineReducers({
  category,
  user
})
export default createStore(rootReducer,applyMiddleware(...middlewareList))