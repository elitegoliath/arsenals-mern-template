import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { tCounterState, counterReducer } from './sampleCounter'
import { tUserState, userReducer } from './user'

export const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : ''

export type tAppState = {
  counter: tCounterState,
  user: tUserState,
}

/**
 * Instantiate the Redux store with middleware.
 */
export default createStore(
  combineReducers<tAppState>({
    counter: counterReducer,
    user: userReducer,
  }),
  applyMiddleware(thunk)
)

export type tReduxAction<T> = {
  type: T
  payload?: any
}

/**
 * Enables dynamic typing of composed selectors.
 * Composing selectors allows for easier access and subscription
 * of Store keys/values.
 * 
 * Set once then forget sort of function.
 */
export type tSelector = (state: tAppState) => {}
export type tSelectorMap = { [key: string]: tSelector }
export const composeSelectors = <T>(_selectorMap: tSelectorMap) => (state: tAppState): T => {
  const selectors: { [key: string]: any } = {}
  Object.keys(_selectorMap).forEach((_selectorKey: string) => {
    const selector = _selectorMap[_selectorKey]
    selectors[_selectorKey] = selector(state)
  })

  return selectors as T
}
