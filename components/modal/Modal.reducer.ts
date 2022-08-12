
import { MODAL_INDEX } from './Modal.action'

const initialState = {
  modalIndex: 0
}

export function ModalReducer(state = initialState, action: { type: any; modalIndex: boolean }) {
  
  switch (action.type) {

    case MODAL_INDEX:
    return Object.assign({}, state, {
      modalIndex: action.modalIndex
    })

    default:
      return state
  }
}
