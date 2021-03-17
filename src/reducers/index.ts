const StorageKey = 'pages/editor:text'

const SET_TEXT = "SET_TEXT" as const
const OPEN_MODAL = "OPEN_MODAL" as const
const CLOSE_MODAL = "CLOSE_MODAL" as const

const setTextAction = (text: string) => ({ type: SET_TEXT, text: text })
const openModalAction = () => ({ type: OPEN_MODAL })
const closeModalAction = () => ({ type: CLOSE_MODAL })

export const actions = {
  setTextAction,
  openModalAction,
  closeModalAction,
}

export type ActionType =
  | ReturnType<typeof setTextAction>
  | ReturnType<typeof openModalAction>
  | ReturnType<typeof closeModalAction>

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
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      }
    default:
      return state
  }
}