import React from 'react'
import { StyleSheet, View, Platform, KeyboardAvoidingView  } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { useSelector} from 'react-redux'

import { BigImage, Card, AddNewItemsDateTime } from '../../components'

export default function AddNewItemScreen3(props) {
  const { colors } = useTheme()
  const darkMode = useSelector(state => state.darkMode.darkMode)

  const darkImage = require('../../assets/images/dark.jpg')
  const lightImage = require('../../assets/images/light.jpg')
  const showImage = darkMode ? darkImage : lightImage

  return (
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage showLogo testID="bigImageTest" source={showImage} />
      <Card showButton buttonWidth={125} buttonText="addNewItemScreen.nextButton" iconName="chevron-right" titleText="addNewItemScreen.title3"  onPress={() => props.navigation.navigate('AddNewItem4')}>

        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[styles.itemsContainer, props.containerStyle]}>

          <AddNewItemsDateTime />

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
