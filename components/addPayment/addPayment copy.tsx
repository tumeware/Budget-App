import * as React from "react"
import { StyleSheet, Dimensions } from "react-native"
import { MyModal } from '../modal'
import { CustomTextInput } from '../text'

type Props = {
  onChangeDescription: Function,
  onChangeMoney: Function,
  closeButtonOnPress: Function
}

export function AddPayment (props: Props) {
  return (
    <MyModal
      {...props}
      height={2}
      showButton
      buttonIconName="plus"
      buttonText="itemScreen.addPaymentButton"
      titleText="itemScreen.title"
      modalContainerStyle={ styles.modalContainer }
      childrenContainerStyle={styles.container}
      closeButtonOnPress={props.closeButtonOnPress}
      onBackButtonPress={props.closeButtonOnPress}
      onBackdropPress={props.closeButtonOnPress}
      onSwipeComplete={props.closeButtonOnPress}
    >

      <CustomTextInput
        iconName="tag"
        title="itemScreen.modalDescription"
        onChangeText={props.onChangeDescription}
      />

      <CustomTextInput
        iconName="credit-card"
        title="itemScreen.modalMoney"
        onChangeText={props.onChangeMoney}
        keyboardType="number-pad"
      />
    </MyModal>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  modalContainer: {
    height: Dimensions.get('window').height / 2
  }
})
