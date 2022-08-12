import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Platform, Falsy, RecursiveArray, RegisteredStyle, ViewStyle } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { NewNameAction, NewDescriptionAction, NewBudgetAction } from './AddNewItems.action'

import { CustomTextInput } from '../text'
import { LocaleNumber } from '../localeNumber'
import { AddNewItemsDateTime } from './AddNewItemsDateTime'
import { AddNewItemsCurrency } from './AddNewItemsCurrency'
import { AddNewItemsImage } from './AddNewItemsImage'

export function AddNewItems(props: { containerStyle: boolean | ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[] | null | undefined }) {
  const dispatch = useDispatch()

  const newName = useSelector(state => state.newName.newName)
  const newDescription = useSelector(state => state.newDescription.newDescription)
  const newBudget = useSelector(state => state.newBudget.newBudget)

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[styles.container, props.containerStyle]}>

      <CustomTextInput onChangeText={(text: any) => dispatch(NewNameAction(text))} containerStyle={styles.customTextInput} iconName="tag" title="addNewItemScreen.name" maxLength={25}>{newName}</CustomTextInput>

      <CustomTextInput onChangeText={(text: any) => dispatch(NewDescriptionAction(text))} iconName="file-text" title="addNewItemScreen.description" multiline={true} maxLength={100} numberOfLines={4}>{newDescription}</CustomTextInput>

      <CustomTextInput onChangeText={(text: any) => dispatch(NewBudgetAction(text))} iconName="credit-card" title="addNewItemScreen.budgetGoal" keyboardType="numeric" maxLength={10}>
        <LocaleNumber value={newBudget} />
      </CustomTextInput>

      <AddNewItemsDateTime />
      <AddNewItemsCurrency />
      <AddNewItemsImage />

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  customTextInput: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingBottom: 50,
  },
})
