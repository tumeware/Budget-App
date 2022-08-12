export const MODAL_INDEX = 'MODAL_INDEX'

export function ModalAction(modalIndex: number) {
  return {
    type: MODAL_INDEX,
    modalIndex
  }
}
