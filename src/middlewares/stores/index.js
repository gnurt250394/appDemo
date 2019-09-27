import allReducer from 'middlewares/reducers'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as Sentry from '@sentry/react-native';
const loggerMiddleware = createLogger()
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Sentry.captureException({
      err,
      redux: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}
const store = createStore(allReducer, applyMiddleware(thunkMiddleware, loggerMiddleware, logger, crashReporter))
export default store
