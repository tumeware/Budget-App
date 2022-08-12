import { NEW_NAME, NEW_DESCRIPTION, NEW_BUDGET, NEW_DEADLINE, NEW_CURRENCY, NEW_IMAGE, QUERY, IMAGE_ID } from './AddNewItems.action'

const initialState = {
  newName: "",
  newDescription: "",
  newBudget: "",
  newCurrency: "€",
  newDeadline: "",
  newImage: null,
  imageSearchQuery: "",
  imageId: ""
}

export function AddNewItemsReducer(state = initialState, action: any) {
  switch (action.type) {

    case NEW_NAME:
    return Object.assign({}, state, {
      newName: action.newName
    })

    case NEW_DESCRIPTION:
    return Object.assign({}, state, {
      newDescription: action.newDescription
    })

    case NEW_BUDGET:
    return Object.assign({}, state, {
      newBudget: action.newBudget
    })

    case NEW_DEADLINE:
    return Object.assign({}, state, {
      newDeadline: action.newDeadline
    })

    case NEW_CURRENCY:
    return Object.assign({}, state, {
      newCurrency: action.newCurrency
    })

    case NEW_IMAGE:
    return Object.assign({}, state, {
      newImage: action.newImage
    })

    case QUERY:
    return Object.assign({}, state, {
      imageSearchQuery: action.imageSearchQuery
    })

    case IMAGE_ID:
    return Object.assign({}, state, {
      imageId: action.imageId
    })

    default:
      return state
  }
}
