import React from 'react'
import { StyleSheet, View, useColorScheme } from 'react-native'
import { useTheme } from "@react-navigation/native"
import Modal from "react-native-modal"
import * as Linking from 'expo-linking'
import { useSelector, useDispatch } from 'react-redux'

import { BigImage, Card, ItemsList, CustomText, TextButton } from '../../components'

import { NewNameAction, NewDescriptionAction, NewBudgetAction, NewDeadlineAction, NewCurrencyAction, NewImageAction, ItemAction, PrivacyPolicyAction  } from '../../store'

const darkImage = require('../../assets/images/dark.jpg')
const lightImage = require('../../assets/images/light.jpg')

export function HomeScreen({navigation}: any) {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const darkMode = useColorScheme()
  const ppModal = useSelector(state => state.ppModal.ppModal)
  const DATA = useSelector(state => state.itemsList.itemsList)

  const modalButtonPress = () => {
    dispatch(PrivacyPolicyAction(false))
  };

  async function goAddNewItem() {
    dispatch(ItemAction({}))
    dispatch(NewNameAction(''))
    dispatch(NewDescriptionAction(''))
    dispatch(NewBudgetAction(''))
    dispatch(NewDeadlineAction(''))
    dispatch(NewCurrencyAction(''))
    dispatch(NewImageAction(null))
    await navigation.navigate('AddNewItem')
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage showLogo testID="bigImageTest" source={darkMode === 'dark' ? darkImage : lightImage} />
      <Card showButton={DATA.length ? false : true} buttonWidth={125} buttonText="homeScreen.newButton" iconName="plus" titleText="card.title" onPress={goAddNewItem}>
        <ItemsList navigation={navigation} addNewLastComponentOnPress={() => goAddNewItem()} />
      </Card>

      <Modal
        isVisible={ppModal}
        backdropOpacity={0.8}
      >
        <View style={[styles.modalContainer, {backgroundColor: colors.containerBg}]}>
          <CustomText 
            title
            size={colors.titleSize}
            color={colors.cardTitle}
            langText="homeScreen.modalTitle"
          />
          <View style={styles.modalTextContainer}>
            <CustomText 
              title
              color={colors.cardTitle}
              langText="homeScreen.modalText"
              style={styles.modalText}
            />
            <View style={styles.linkTextsContainer}>
              <CustomText 
                title
                color={colors.cardTitle}
                langText="homeScreen.PPLinkText"
                style={styles.linkTexts}
                onPress={() => Linking.openURL('https://budgetpal-cdf47.web.app/')}
              />
              <CustomText 
                title
                color={colors.cardTitle}
                langText="homeScreen.TKLinkText"
                style={styles.linkTexts}
                onPress={() => Linking.openURL('https://budgetpal-cdf47.web.app/terms-and-conditions/')}
              />
              
            </View>

            
            
            
          </View>

          <TextButton
            containerStyle={styles.buttonContainer}
            langText="homeScreen.modalButton"
            iconName="check"
            buttonWidth={150}
            onPress={modalButtonPress}
          />



          
        </View>

        
        
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  switch: {
    position: 'absolute',
    top: '5%',
    right: 10,
  },
  modalContainer: {
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 30
  },
  modalText: {
    textAlign: 'center'
  },
  linkTextsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalTextContainer: {
    marginTop: 20
  },
  linkTexts: {
    textDecorationLine: 'underline'
  },
  buttonContainer: {
    marginTop: 30
  }
})
