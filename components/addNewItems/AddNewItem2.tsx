import React from 'react'
import { View, StyleSheet, Platform, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { NewBudgetAction } from './AddNewItems.action'

import { CustomTextInput } from '../text/TextInput'
import { AddNewItemsCurrency } from './AddNewItemsCurrency'
import { LocaleNumber } from '../localeNumber'

export function AddNewItem2 (props: any) {
  const dispatch = useDispatch()
  const newBudget = useSelector(state => state.newBudget.newBudget)

  function onChangeText(number: any) {
    dispatch(NewBudgetAction(number.split(",").join("")))
  }

  return (
    <View style={[styles.itemsContainer, props.containerStyle]}>

      <CustomTextInput autoFocus noPressable containerStyle={styles.inputContainerStyle} onChangeText={(number: any) => onChangeText(number)} iconName="credit-card" title="addNewItemScreen.budgetGoal" keyboardType="number-pad" returnKeyType="done" maxLength={12}>
        <LocaleNumber noSuffix value={newBudget} />
      </CustomTextInput>

      <AddNewItemsCurrency containerStyle={styles.inputContainerStyle} />

    </View>
  )
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
  },
  inputContainerStyle: {
    width: Dimensions.get('window').width / 1.5,
  },
})
