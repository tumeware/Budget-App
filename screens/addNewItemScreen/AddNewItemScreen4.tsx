import React, { useEffect } from 'react'
import { StyleSheet, View, Platform, KeyboardAvoidingView  } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { useSelector } from 'react-redux'

import { AddNewItemsImage, BigImage, Card } from '../../components'

export default function AddNewItemScreen4(props) {
  const { colors } = useTheme()
  const darkMode = useSelector(state => state.darkMode.darkMode)

  const darkImage = require('../../assets/images/dark.jpg')
  const lightImage = require('../../assets/images/light.jpg')
  const showImage = darkMode ? darkImage : lightImage

  return (
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage showLogo testID="bigImageTest" source={showImage} />
      <Card showButton buttonWidth={125} buttonText="addNewItemScreen.saveButton" iconName="plus" titleText="addNewItemScreen.title4"  onPress={() => props.navigation.navigate('Home')}>

        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[styles.itemsContainer, props.containerStyle]}>

          <AddNewItemsImage />

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
