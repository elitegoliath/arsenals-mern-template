import { tCounterAction, eCounterActions } from './actions'

export type tCounterState = {
  count: number
}

const INITIAL_STATE: tCounterState = {
  count: 0
}

export const counterReducer = (_state: tCounterState = INITIAL_STATE, _action: tCounterAction) => {
  switch (_action.type) {
    case eCounterActions.SET_COUNT: return {..._state, count: _action.payload}
    default: return _state
  }
}