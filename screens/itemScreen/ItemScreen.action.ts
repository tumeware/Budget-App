export const ITEM = 'ITEM'
export const NEW_DUE = 'NEW_DUE'
export const DUES = 'DUES'
export const DELETE_DUE = 'DELETE_DUE'

export function ItemAction(item: any) {
  return {
    type: ITEM,
    item
  }
}

export function DuesAction(dues: any) {
  return {
    type: DUES,
    dues
  }
}

export function NewPaymentAction(newDue: any) {
  return {
    type: NEW_DUE,
    newDue
  }
}

export function DeleteDueAction(id: any) {
  return {
    type: DELETE_DUE,
    id
  }
}