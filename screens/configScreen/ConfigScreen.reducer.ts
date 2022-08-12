
import { ITEM, NEW_DUE, DUES, DELETE_DUE } from './ConfigScreen.action'

const initialState = {
  item: {},
  dues: []
}

export function ConfigScreenReducer(state = initialState, action: { type: any; item: any, newDue: any, dues: any, id: any }) {
  switch (action.type) {

    case ITEM:
    return Object.assign({}, state, {
      item: action.item
    })

    case DUES:
    return Object.assign({}, state, {
      dues: action.dues
    })

    case NEW_DUE:
    return { 
      ...state,
      dues: [ ...state.dues, action.newDue ]
    }

    case DELETE_DUE:
    return {
      ...state,
      dues: state.dues.filter(item => item.id !== action.id)
    }

    default:
      return state
  }
}
