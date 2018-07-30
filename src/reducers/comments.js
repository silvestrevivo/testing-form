import { SAVE_COMMENT } from 'actions/types'

export default function(state = [], action) {
  switch (action.key) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    default:
      return state
  }
}
