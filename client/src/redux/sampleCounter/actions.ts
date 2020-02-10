import { useActions } from '../../hooks/useActions'

export enum eCounterActions {
  SET_COUNT = 'COUNTER_SET_COUNT',
}

// TODO: Make this type abstract.
export type tCounterAction = {
  type: eCounterActions
  payload?: any
}

const setCounterAction = (_count: number): tCounterAction => ({ type: eCounterActions.SET_COUNT, payload: _count })

const actions = {
  setCounter: setCounterAction,
  setAsyncCounter: () => async (_dispatch: any): Promise<void> => {
    // Async actions/API calls can be done in here.
    // const response = await fetch('')
    const fakeResponseVal = 12
    _dispatch(setCounterAction(fakeResponseVal))
  },
}

export type tActions = {
  setCounter: (_count: number) => void,
  setAsyncCounter: () => Promise<void>,
}

export const useUserActions = (): tActions => useActions(actions)
