
import { ITEMS_LIST, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, FAVORITE } from './itemsList.action'

const initialState = {
  itemsList: [
    /*
    {
      id: 'vsf56456yhthf',
      title: 'summer vacation 2021',
      description: 'test1 description',
      budgetGoal: 2600,
      currency: '€',
      dueDate: '',
      dueTime: '',
      CreatedDate: '',
      image: 'https://images.unsplash.com/photo-1610470004943-226f1ac2e777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      favorite: false,
      dues: [
        {
          id: 'ggdgdf65465yhtfh',
          date: '',
          amount: 100
        }
      ]
    }
    */
  ]
}

export function ItemsListReducer(state = initialState, action: { type: any; itemsList: any; addItem: any, deleteItem: any, id: any, updateItem: any, items: any, newPayment: any, favorite: boolean }) {

  const item = state.itemsList.find(item => item.id === action.id)
  const itemIndex = state.itemsList.findIndex(item => item.id === action.id)
  

  switch (action.type) {

    case ITEMS_LIST:
    return Object.assign({}, state, {
      itemsList: action.itemsList
    })

    case ADD_ITEM:
    return {
      ...state,
      itemsList: [...state.itemsList, action.addItem]
    }

    case DELETE_ITEM:
    return {
      ...state,
      itemsList: state.itemsList.filter(item => item.id !== action.deleteItem)
    }

    case UPDATE_ITEM:
    return { 
      ...state,
      itemsList: [ ...state.itemsList.filter(p => p !== item), { ...action.items } ]
    }

    case FAVORITE:
      return {
        ...state,
        itemsList: state.itemsList.map(
            (content, i) => i === itemIndex ? {...content, favorite: action.favorite} : content
        )
     }

    default:
      return state
  }
}
