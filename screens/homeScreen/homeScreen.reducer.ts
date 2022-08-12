
import { PRIVACY_POLICY_MODAL } from './homeScreen.action'

const initialState = {
  ppModal: true
}

export function PrivacyPolicyReducer(state = initialState, action: { ppModal: Boolean; }) {
  switch (action.type) {

    case PRIVACY_POLICY_MODAL:
    return Object.assign({}, state, {
      ppModal: action.ppModal
    })

    default:
      return state
  }
}
