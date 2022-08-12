// FIXME: on Android, on money tab: if text field is empty and keyboard clear ( back) button is pressed, something odd happens!

import React, { useEffect, useState, useRef } from 'react'
import { nanoid } from 'nanoid/non-secure'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, FlatList, KeyboardAvoidingView, useColorScheme } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { useSelector, useDispatch } from 'react-redux'
import { UNSPLASH_ACCESS_KEY } from '@env'
import { AdMobInterstitial } from 'expo-ads-admob'

import { BigImage, Card, AddNewItem1, AddNewItem2, AddNewItem3, AddNewItem4, AdInterstitial, ImageSearchQueryAction } from '../../components'

import { AddItemAction, ItemAction, DeleteItemAction, UpdateItemAction } from '../../store'

const DATA = [
  {
    id: 'jhfbnvut675uy',
    component: <AddNewItem1 />
  },
  {
    id: '897tfghcghjf',
    component: <AddNewItem2 />
  },
  {
    id: '432erwghfjnmb',
    component: <AddNewItem3 />
  },
  {
    id: 'fsatur675mbvhgf',
    component: <AddNewItem4 />
  }
]

export function AddNewItemScreen(props) {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const ref = useRef(null)
  const darkMode = useColorScheme()
  const item = useSelector(state => state.item.item)

  const newName = useSelector(state => state.newName.newName)
  const newDescription = useSelector(state => state.newDescription.newDescription)
  const newBudget = useSelector(state => state.newBudget.newBudget)
  const newCurrency = useSelector(state => state.newCurrency.newCurrency)
  const newDeadline = useSelector(state => state.newDeadline.newDeadline)
  const newImage = useSelector(state => state.newImage.newImage)
  const imageId = useSelector(state => state.imageId.imageId)

  const [routeState, setRouteState] = useState(0)
  const [title, setTitle] = useState('addNewItemScreen.title')
  const [buttonTitle, setButtonTitle] = useState('addNewItemScreen.nextButton')
  const [icon, setIcon] = useState('chevron-right')
  const [disabledButton, setDisabledButton] = useState(false)
  const [behavior, setBehavior] = useState('position')

  const darkImage = require('../../assets/images/dark.jpg')
  const lightImage = require('../../assets/images/light.jpg')
  const showImage = darkMode === 'dark' ? darkImage : lightImage

  function onScroll(e) {
    let contentOffset = e.nativeEvent.contentOffset
    let viewSize = e.nativeEvent.layoutMeasurement
    let pageNum = Math.floor(contentOffset.x / viewSize.width)
    setRouteState(pageNum)
  }

  function ImageDownloadRequest () {
    const url = 'https://api.unsplash.com/photos/' + imageId + '/download/?client_id=' + UNSPLASH_ACCESS_KEY
    const init = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': 'v1'
      }
    }
    fetch(url, init)
    .catch(err => {
      console.log(err)
    })
  }

  async function onButtonPress() {
    if (routeState === 0) {
        dispatch(ImageSearchQueryAction(newName))
        await ref.current.scrollToIndex({ animated: true, index: 1 })
    } else if (routeState === 1) {
        ref.current.scrollToIndex({ animated: true, index: 2 })
    } else if (routeState === 2) {
        ref.current.scrollToIndex({ animated: true, index: 3 })
    } else {
      if (item.title) {
        const updateItem = {
          id: item.id,
          userId: item.userId,
          title: newName,
          description: newDescription,
          budgetGoal: newBudget,
          currency: newCurrency,
          deadline: newDeadline,
          CreatedDate: item.CreatedDate,
          image: newImage,
          favorite: item.favorite
        }
        dispatch(UpdateItemAction(item.id, updateItem))
        dispatch(ItemAction(updateItem))
        ImageDownloadRequest()
        await props.navigation.replace('Item')
        // await AdInterstitial()
      } else {
        // save a new item
        const saveData = async () => {
          try {
            const userId = await AsyncStorage.getItem('userId')
            if(userId === null) {
              const newItem = {
                id: 'ID-' + nanoid(24),
                userId: userId,
                title: newName,
                description: newDescription,
                budgetGoal: newBudget,
                currency: newCurrency,
                deadline: newDeadline ? newDeadline : new Date(),
                CreatedDate: new Date(),
                image: newImage,
                favorite: false
              }

              dispatch(AddItemAction(newItem))
              dispatch(ItemAction(newItem))
              ImageDownloadRequest()
              await props.navigation.replace('Item')
              // await AdInterstitial()
            }
          } catch(e) {
            console.log(e)
          }
        }
        saveData()
      }
    }
  }

  function onLeftButtonPress() {
    if (routeState === 0) {
        props.navigation.goBack()
    } else if (routeState === 1) {
        ref.current.scrollToIndex({ animated: true, index: 0 })
    } else if (routeState === 2) {
        ref.current.scrollToIndex({ animated: true, index: 1 })
    } else {
        ref.current.scrollToIndex({ animated: true, index: 2 })
    }
  }

  async function deleteItem (id: any) {
    dispatch(DeleteItemAction(item.id))
    await props.navigation.navigate('Home')
  }

  /*
  useEffect(() => {
    AdMobInterstitial.addEventListener("interstitialDidClose", () => props.navigation.replace('Item'))
      return () => AdMobInterstitial.removeAllListeners()
  })
  */

  useEffect(() => {
    if (routeState === 0) {
        setTitle('addNewItemScreen.title')
        setButtonTitle('addNewItemScreen.nextButton')
        setIcon('chevron-right')
        setBehavior("position")
    } else if (routeState === 1) {
        setTitle('addNewItemScreen.title2')
        setButtonTitle('addNewItemScreen.nextButton')
        setIcon('chevron-right')
        setBehavior("position")
    } else if (routeState === 2) {
        setTitle('addNewItemScreen.title3')
        setButtonTitle('addNewItemScreen.nextButton')
        setIcon('chevron-right')
    }  else {
        setTitle('addNewItemScreen.title4')
        setButtonTitle('addNewItemScreen.saveButton')
        setIcon('plus')
    }
  }, [routeState])

  useEffect(() => {
    if (newName !== '' && newDescription !== '' && routeState === 0 || newBudget !== '' && newCurrency !== '' && routeState === 1 || newDeadline !== null && routeState === 2 || routeState === 3) {
        setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [routeState, newName, newDescription, newBudget, newCurrency, newDeadline])

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      style={[styles.container, {backgroundColor: colors.containerBg}]}
      contentContainerStyle={styles.container}
    >
      <BigImage
        showLeftButton
        showRightButton={item.title ? true : false}
        testID="addNewItemScreen"
        source={newImage ? { uri: newImage } : showImage}
        leftIconButtonName="arrow-left"
        leftButtonOnPress={onLeftButtonPress}
        rightIconButtonName="trash-2"
        rightButtonOnPress={() => deleteItem(item.id)}
      />
      <Card
        showAd
        showButton
        disabledButton={disabledButton}
        buttonWidth={125}
        buttonText={buttonTitle}
        iconName={icon}
        leftIconButtonName="chevron-left"
        titleText={title}
        text={item.title}
        onPress={ onButtonPress }
        childrenContainer={styles.listContainer}
      >
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={!disabledButton}
          initialNumToRender={1}
          initialScrollIndex={0}
          data={DATA}
          renderItem={({ item }) => item.component}
          keyExtractor={item => item.id}
          ref={ref}
          onScroll={onScroll}
        />
      </Card>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
  customTextInput: {
    marginTop: 10,
  },
  itemsContainer: {
    flex: 1,
  },
})
