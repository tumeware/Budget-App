import React from 'react'
import { CustomTextInput } from '../text/TextInput'
import { LocaleNumber } from '../localeNumber/LocaleNumber'

type Props = {
  onChangeDescription: Function,
  onChangeMoney: Function,
  onPress: Function,
  buttonWidth: number,
  onKeyPressDescription: Function,
  onKeyPressMoney: Function,
  disabledMoney: boolean,
  onSubmitEditing: Function,
  value: Number
}

export function AddPayment (props: Props) {
  return (
    <>
      <CustomTextInput
        iconName="tag"
        title="itemScreen.modalDescription"
        onChangeText={props.onChangeDescription}
        autoFocus
        maxLength={40}
        onKeyPress={props.onKeyPressDescription}
      />

      <CustomTextInput
        editable={props.disabledMoney}
        iconName="credit-card"
        title="itemScreen.modalMoney"
        onChangeText={props.onChangeMoney}
        keyboardType="numeric"
        maxLength={8}
        onSubmitEditing={props.onSubmitEditing}
      >
        <LocaleNumber noSuffix value={props.value} />
      </CustomTextInput>
    </>
  )
}
