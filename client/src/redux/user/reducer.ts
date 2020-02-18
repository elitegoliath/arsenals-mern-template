import { User } from '../../models'
import { tReduxAction } from '../store'
import { eUserActions } from './actions'

export type tUserState = {
  authUser: User
}

const initialState: tUserState = {
  authUser: new User()
}

export const userReducer = (_state: tUserState = initialState, _action: tReduxAction<eUserActions>) => {
  switch (_action.type) {
    case eUserActions.SET_AUTH_USER: return { ..._state, authUser: _action.payload }
    default: return _state
  }
}
