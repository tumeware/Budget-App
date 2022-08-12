import React from 'react'
import { MyModal } from './Modal'
import { InfoModal } from '../infoModal/infoModal'
import { AddPayment } from '../addPayment/addPayment'
import { PaymentsList } from '../paymentsList/paymentsList'

type Props = {
  infoButtonOnPress: Function,
  infoCloseButtonOnPress: Function,
  addPaymentButtonOnPress: Function,
  addPaymentOnChangeDescription: Function,
  addPaymentOnChangeMoney: Function,
  addPaymentCloseButtonOnPress: Function,
  modalTitle: String,
  modalType: any,
  onChangeDescription: Function,
  onChangeMoney: Function
}

export function ModalItemsWrapper (props: Props) {
  return (
    <MyModal {...props} titleText={props.modalTitle} buttonOnPress={props.addPaymentButtonOnPress}>

      { props.modalType === 'InfoModal' &&
      <InfoModal {...props} />
      }

      { props.modalType === 'PaymentsList' &&
      <PaymentsList {...props} />
      }

      { props.modalType === 'AddPayment' &&
      <AddPayment
        {...props}
        onChangeDescription={props.onChangeDescription}
        onChangeMoney={props.onChangeMoney}
        closeButtonOnPress={props.addPaymentCloseButtonOnPress}
      />
      }

    </MyModal>
  )
}
