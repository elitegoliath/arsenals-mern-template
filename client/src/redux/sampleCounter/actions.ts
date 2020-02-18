import { useActions } from '../../hooks/useActions'
import { tReduxAction } from '../store'

export enum eCounterActions {
  SET_COUNT = 'COUNTER_SET_COUNT',
}

const setCounterAction = (_count: number): tReduxAction<eCounterActions> => ({ type: eCounterActions.SET_COUNT, payload: _count })

const actions = {
  setCounter: setCounterAction,
  setAsyncCounter: () => async (_dispatch: any): Promise<void> => {
    // Async actions/API calls can be done in here.
    // const response = await fetch('')
    const fakeResponseVal = 12
    _dispatch(setCounterAction(fakeResponseVal))
  },
}

type tActions = {
  setCounter: (_count: number) => void,
  setAsyncCounter: () => Promise<void>,
}

export const useCounterActions = (): tActions => useActions(actions)
