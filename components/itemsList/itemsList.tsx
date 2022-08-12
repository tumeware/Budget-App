import * as React from "react"
import { useDispatch } from 'react-redux'
import { StyleSheet, View, FlatList, Image, Dimensions, ScrollView, Text } from "react-native"
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { ImageItem } from '../imageItem'
import { CustomText } from '../text'
import { ItemAction } from '../../store'

const defaultImgL = require('../../assets/images/logoL.png')
const defaultImgD = require('../../assets/images/logoD.png')
const lightArrow = require('../../assets/images/arrowD.png')
const darkArrow = require('../../assets/images/arrowL.png')

export function ItemsList ({navigation, addNewLastComponentOnPress}: any) {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const DATA = useSelector(state => state.itemsList.itemsList)
  const darkMode = useSelector(state => state.darkMode.darkMode)

  const starIcon = (
    <Feather
      name="star"
      size={colors.iconSize}
      color={colors.smallButtonIconColor}
      style={styles.icon}
    />
  )

  const clipboardIcon = (
    <Feather
      name="clipboard"
      size={colors.iconSize}
      color={colors.smallButtonIconColor}
      style={styles.icon}
    />
  )

  const emptyList = (
    <View style={styles.emptyListContainer}>
      <CustomText containerStyle={styles.emptyTextContainer} style={styles.emptyText} title size={16} color={colors.smallButtonIconColor} langText="itemsList.emptyList" />
      <View style={styles.imageContainer}>
      <Image
        source={darkMode ? darkArrow : lightArrow}
        resizeMethod="auto"
        resizeMode="contain"
        style={styles.image}
      />
      </View>
    </View>
  )

  const addNewLastComponent = (
    <ImageItem
      noImage
      containerStyle={styles.imageItem}
      id={"empty"}
      width={250}
      source={darkMode ? defaultImgD : defaultImgL}
      leftText={"left"}
      rightText={"right"}
      langText="homeScreen.newButton"
      onPress={ addNewLastComponentOnPress } 
    />
  )

  const itemOnpress = (item: any) => {
    dispatch(ItemAction(item))
    navigation.navigate('Item')
  }

  const renderFavs = ({ item }: any) => {
    if(item.favorite) {
      return (
        <ImageItem containerStyle={styles.imageItem} id={item.id} width={250} source={!item.image ? darkMode ? defaultImgD : defaultImgL : {uri: item.image}} leftText={item.title} rightText={item.dueDate} onPress={() => itemOnpress(item)} />
      )
    }
  }

  const renderRest = ({ item }: any) => {
    if(!item.favorite) {
      return (
        <ImageItem containerStyle={styles.imageItem} id={item.id} width={250} source={!item.image ? darkMode ? defaultImgD : defaultImgL : {uri: item.image}} leftText={item.title} rightText={item.dueDate} onPress={() => itemOnpress(item)} />
      )
    }
  }

  const favCheck = DATA.map((x: { favorite: any }) => {
    if (x.favorite) {
      return x
    }
  }).filter((y: any) => y)

  const itemsCheck = DATA.map((x: { favorite: any }) => {
    if (!x.favorite) {
      return x
    }
  }).filter((y: any) => y)

  const showFavs = (
    <>
      <View style={styles.iconContainer}>{starIcon}</View>
      <FlatList
        horizontal
        initialNumToRender={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderFavs}
        keyExtractor={item => item.id}
        ListFooterComponent={() => addNewLastComponent}
      />
    </>
  )

  const showItems = (
    <>
      <View style={styles.iconContainer}>{clipboardIcon}</View>
      <FlatList
        horizontal
        initialNumToRender={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderRest}
        keyExtractor={item => item.id}
        ListFooterComponent={() => addNewLastComponent}
      />
    </>
  )

  const renderAll = (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
    { favCheck.length ? showFavs : null }
    { itemsCheck.length ? showItems : null }
    </View>
    </ScrollView>
  )

  return DATA.length ? renderAll : emptyList
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: 10,
  },
  itemSeparator: {
    margin: 10,
  },
  emptyListContainer: {
    alignItems: 'center',
    marginHorizontal: 40,
  },
  emptyText: {
    textAlign: 'center',
  },
  imageItem: {
    marginRight: 10,
  },
  iconContainer: {
    //borderWidth: 1,
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,.10)',
  },
  icon: {
    textAlign: 'center',
    width: 50,
    lineHeight: 50,
  },
  imageContainer: {
    alignItems: 'flex-end',
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/2
  },
  image: {
    width: Dimensions.get('window').width/6,
    height: "25%",
  },
})
