
import { USER_ID } from './LoginScreen.action'

const initialState = {
  userId: ''
}

export function LoginScreenReducer(state = initialState, action: { type: any; userId: any }) {
  switch (action.type) {

    case USER_ID:
    return Object.assign({}, state, {
      userId: action.userId
    })

    default:
      return state
  }
}
