import React from 'react'
import { StyleSheet, View, Platform, KeyboardAvoidingView  } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { useSelector, useDispatch } from 'react-redux'

import { BigImage, Card, CustomTextInput, AddNewItemsCurrency, LocaleNumber, NewBudgetAction } from '../../components'

export default function AddNewItemScreen1(props) {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.darkMode.darkMode)

  const newBudget = useSelector(state => state.newBudget.newBudget)
  const newDescription = useSelector(state => state.newDescription.newDescription)

  const darkImage = require('../../assets/images/dark.jpg')
  const lightImage = require('../../assets/images/light.jpg')
  const showImage = darkMode ? darkImage : lightImage

  return (
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage showLogo testID="bigImageTest" source={showImage} />
      <Card showButton buttonWidth={125} buttonText="addNewItemScreen.nextButton" iconName="chevron-right" titleText="addNewItemScreen.title2"  onPress={() => props.navigation.navigate('AddNewItem3')}>

        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[styles.itemsContainer, props.containerStyle]}>

          <CustomTextInput onChangeText={text => dispatch(NewBudgetAction(text))} iconName="credit-card" title="addNewItemScreen.budgetGoal" keyboardType="numeric" maxLength={10}>
            <LocaleNumber value={newBudget} />
          </CustomTextInput>

          <AddNewItemsCurrency />

        </KeyboardAvoidingView>

      </Card>
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
    paddingBottom: 50,
  },
})
