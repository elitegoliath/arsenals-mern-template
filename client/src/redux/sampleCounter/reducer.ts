import { eCounterActions } from './actions'
import { tReduxAction } from '../store'

export type tCounterState = {
  count: number
}

const initialState: tCounterState = {
  count: 0
}

export const counterReducer = (_state: tCounterState = initialState, _action: tReduxAction<eCounterActions>) => {
  switch (_action.type) {
    case eCounterActions.SET_COUNT: return {..._state, count: _action.payload}
    default: return _state
  }
}