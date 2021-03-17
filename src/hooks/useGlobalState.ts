import { useContext, Dispatch } from 'react'
import { globalStateContext, globalDispatchContext } from '../contexts'
import { ActionType, State } from '../reducers'

export const useGlobalState = (): [State, Dispatch<ActionType>] => {
  const state = useContext(globalStateContext)
  const dispatch = useContext(globalDispatchContext)
  if (!state || !dispatch) throw new Error('GlobalProvider not found')
  return [state, dispatch]
}