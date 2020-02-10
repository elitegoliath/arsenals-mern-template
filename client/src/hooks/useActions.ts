import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

// TODO: Make the actions type more explicit.
export const useActions = (_actions: any) => {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(_actions)) {
        return _actions.map(_a => bindActionCreators(_a, dispatch))
      }
      return bindActionCreators(_actions, dispatch)
    },
    [dispatch, _actions]
  )
}
