import React from 'react'
import { View, StyleSheet, Platform, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { NewNameAction, NewDescriptionAction } from './AddNewItems.action'

import { CustomTextInput } from '../text'

export function AddNewItem1 (props: any) {
  const dispatch = useDispatch()

  const newName = useSelector(state => state.newName.newName)
  const newDescription = useSelector(state => state.newDescription.newDescription)

  return (
    <View style={[styles.itemsContainer, props.containerStyle]}>

      <CustomTextInput autoFocus noPressable containerStyle={styles.inputContainerStyle} onChangeText={(text: any) => dispatch(NewNameAction(text))} iconName="tag" title="addNewItemScreen.name" maxLength={25}>{newName}</CustomTextInput>

      <CustomTextInput noPressable containerStyle={[styles.inputContainerStyle, styles.customTextInput]} onChangeText={(text: any) => dispatch(NewDescriptionAction(text))} iconName="file-text" title="addNewItemScreen.description" maxLength={50}>{newDescription}</CustomTextInput>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  customTextInput: {
    marginTop: 10,
  },
  itemsContainer: {
    flex: 1,
  },
  inputContainerStyle: {
    width: Dimensions.get('window').width / 1.5,
  },
})
