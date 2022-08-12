
export const NEW_NAME = 'NEW_NAME'
export const NEW_DESCRIPTION = 'NEW_DESCRIPTION'
export const NEW_BUDGET = 'NEW_BUDGET'
export const NEW_DEADLINE = 'NEW_DEADLINE'
export const NEW_CURRENCY = 'NEW_CURRENCY'
export const NEW_IMAGE = 'NEW_IMAGE'
export const QUERY = 'QUERY'
export const IMAGE_ID = 'IMAGE_ID'

export function NewNameAction(newName: any) {
  return {
    type: NEW_NAME,
    newName
  }
}

export function NewDescriptionAction(newDescription: any) {
  return {
    type: NEW_DESCRIPTION,
    newDescription
  }
}

export function NewBudgetAction(newBudget: any) {
  return {
    type: NEW_BUDGET,
    newBudget
  }
}

export function NewDeadlineAction(newDeadline: any) {
  return {
    type: NEW_DEADLINE,
    newDeadline
  }
}

export function NewCurrencyAction(newCurrency: any) {
  return {
    type: NEW_CURRENCY,
    newCurrency
  }
}

export function NewImageAction(newImage: string | null) {
  return {
    type: NEW_IMAGE,
    newImage
  }
}

export function ImageSearchQueryAction(imageSearchQuery: any) {
  return {
    type: QUERY,
    imageSearchQuery
  }
}

export function ImageIdAction(imageId: any) {
  return {
    type: IMAGE_ID,
    imageId
  }
}
