import React, { createContext, Dispatch, FC, useReducer } from 'react'
import { initialState, reducer, State, ActionType } from '../reducers'

export const globalStateContext = createContext<undefined | State>(undefined)
export const globalDispatchContext = createContext<undefined | Dispatch<ActionType>>(undefined)

export const GlobalProvider: FC = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState)

  return (
    <globalStateContext.Provider value={globalState}>
      <globalDispatchContext.Provider value={globalDispatch}>
        {children}
      </globalDispatchContext.Provider>
    </globalStateContext.Provider>
  )
}