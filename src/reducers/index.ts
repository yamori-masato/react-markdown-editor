const StorageKey = 'pages/editor:text'
const SET_TEXT = "SET_TEXT" as const

const setTextAction = (text: string) => {
  return { type: SET_TEXT, text: text }
}

export const actions = {
  setTextAction,
}

export type ActionType =
  | ReturnType<typeof setTextAction>

export type State = {
  text: string
  isModalOpen: boolean
}

export const initialState: State = {
  text: localStorage.getItem(StorageKey) || '',
  isModalOpen: false
}

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case SET_TEXT:
      localStorage.setItem(StorageKey, action.text)
      return {
        ...state,
        text: action.text,
      }
    default:
      return state
  }
}