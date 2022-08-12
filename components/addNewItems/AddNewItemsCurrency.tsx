import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { NewCurrencyAction } from './AddNewItems.action'
import { CustomTextInput } from '../text/TextInput'

export function AddNewItemsCurrency() {
  const dispatch = useDispatch()
  const currency = useSelector(state => state.newCurrency.newCurrency)

  return (
      <CustomTextInput
        noPressable
        maxLength={ 3 }
        onChangeText={ (t: any) => dispatch(NewCurrencyAction(t)) }
        title="addNewItemScreen.currency"
        containerStyle={ styles.customTextInputContainer }
        iconName="dollar-sign"
      >
        {currency}
      </CustomTextInput>
  )
}

const styles = StyleSheet.create({
  customTextInputContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: Dimensions.get('window').width / 1.5,
  },
})
