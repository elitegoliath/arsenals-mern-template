import { tSelector, tAppState, tSelectorMap, composeSelectors } from '../store'
import { User } from '../../models'
import { tUserState } from './reducer'
import { useSelector } from 'react-redux'

const authUserSelector: tSelector = (_state: tAppState): User => _state.user.authUser

const selectors: tSelectorMap = {
  authUser: authUserSelector,
}

type tUserSelectors = tUserState & {
  
}

export const useUserSelectors: () => tUserSelectors = () => useSelector(composeSelectors<tUserSelectors>(selectors))
