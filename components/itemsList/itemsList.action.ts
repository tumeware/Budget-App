
export const ITEMS_LIST = 'ITEMS_LIST'
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const FAVORITE = 'FAVORITE'

export function ItemsListAction(itemsList: any) {
  return {
    type: ITEMS_LIST,
    itemsList
  }
}

export function AddItemAction(addItem: any) {
  return {
    type: ADD_ITEM,
    addItem
  }
}

export function DeleteItemAction(deleteItem: any) {
  return {
    type: DELETE_ITEM,
    deleteItem
  }
}

export function UpdateItemAction(id: any, items: any) {
  return {
    type: UPDATE_ITEM,
    id, items
  }
}

export function FavoriteAction(id: any, favorite: boolean) {
  return {
    type: FAVORITE,
    id, favorite
  }
}
