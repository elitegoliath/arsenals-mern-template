import { apiUrl, tReduxAction } from '../store'
import { useActions } from '../../hooks'
import { User } from '../../models'

export enum eUserActions {
  SET_AUTH_USER = 'SET_AUTH_USER',
}

const setAuthUserAction = (_user: User): tReduxAction<eUserActions> => ({ type: eUserActions.SET_AUTH_USER, payload: _user })

const actions = {
  userSignUp: (_username: string, _password: string) => async (_dispatch: any): Promise<void> => {
    try {
      const response = await fetch(`${apiUrl}proxy/register`, {
        method: 'post',
        body: JSON.stringify({ username: _username, password: _password })
      })
      const resParsed = await response.json()

      console.log('User Sign Up: ', resParsed)

      // TODO: If sign up fails, handle it.
      // TODO: Auto-sign-on on the server after new account creation.
      if (response.ok) _dispatch(setAuthUserAction(new User(resParsed.user)))
    } catch (_error) {
      throw new Error(`Issue with User Sign Up: ${_error}`)
    }
  },
  userSignIn: () => () => {},
}

type tActions = {
  setAuthUser: (_user: User) => void
  userSignUp: (_username: string, _password: string) => Promise<void>
  userSignIn: () => Promise<void>
}

export const useUserActions = (): tActions => useActions(actions)
