import { useSelector } from 'react-redux'
import { tAppState, selectorComposer, tSelector, tSelectorMap } from '../store'
import { tCounterState } from './reducer'

const countSelector: tSelector = (_state: tAppState): number => _state.counter.count

const counterSelectors: tSelectorMap = {
  count: countSelector,
}

type tCounterSelectors = tCounterState & {
  // Non-state key selectors go here. Such as ones that would do additional processing.
  // Example may be our state has a key for firstName, and one for lastName. There
  // would be selectors for both by default, but what if we wanted fullName? Instead
  // of storing the full name as a key and having to manage that additional key, just make
  // a new selector that concats them together.
}

export const useCounterSelectors: () => tCounterSelectors = () => useSelector(selectorComposer<tCounterSelectors>(counterSelectors))
