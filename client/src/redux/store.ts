import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { tCounterState, counterReducer } from './sampleCounter'

export type tAppState = {
  counter: tCounterState,
}

/**
 * Instantiate the Redux store with middleware.
 */
export default createStore(
  combineReducers<tAppState>({
    counter: counterReducer,
  }),
  applyMiddleware(thunk)
)

/**
 * Enables dynamic typing of composed selectors.
 * Composing selectors allows for easier access and subscription
 * of Store keys/values.
 * 
 * Set once then forget sort of function.
 */
export type tSelector = (state: tAppState) => {}
export type tSelectorMap = { [key: string]: tSelector }
export const selectorComposer = <T>(_selectorMap: tSelectorMap) => (state: tAppState): T => {
  const selectors: { [key: string]: any } = {}
  Object.keys(_selectorMap).forEach((_selectorKey: string) => {
    const selector = _selectorMap[_selectorKey]
    selectors[_selectorKey] = selector(state)
  })

  return selectors as T
}
