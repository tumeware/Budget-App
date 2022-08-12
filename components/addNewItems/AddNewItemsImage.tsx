import React, { useState, useEffect, memo } from 'react'
import { View, Dimensions, Image, StyleSheet, FlatList, Pressable } from 'react-native'
import * as Linking from 'expo-linking'
import { useTheme } from "@react-navigation/native"
import { useSelector, useDispatch } from 'react-redux'
import * as Localization from "expo-localization"
import { UNSPLASH_ACCESS_KEY } from '@env'

import { NewImageAction, ImageSearchQueryAction, ImageIdAction } from './AddNewItems.action'

import { CustomTextInput } from '../text/TextInput'
import { CustomText } from '../text/text'

export function AddNewItemsImage() {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const query = useSelector(state => state.imageSearchQuery.imageSearchQuery)
  const [perPage, setPerPage] = useState(10)
  const [imageList, setImageList] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [searchQuery, setSearchQuery] = useState(query)

  type Props = {
    item: string,
    pageNumber: number,
    setPerPage: number
  }

  useEffect(() => {
    setPerPage(10)
    pickImage()
  }, [query])

  function onEndReached() {
    setPerPage(perPage + 10)
    pickImage()
  }

  const pickImage = () => {
    const formatted_locale = Localization.locale.split('-')[0]
    const url = 'https://api.unsplash.com/search/photos/?client_id=' + UNSPLASH_ACCESS_KEY + '&query=' + query + '&per_page=' + perPage + '&page=' + pageNumber + 'order_by=relevant&lang=' + formatted_locale

    const init = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': 'v1'
      }
    }

    fetch(url, init)
    .then(response => response.json())
    .then(res => {
      setImageList(res.results)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const selectImage = async (image: any, imageId: any) => {
    dispatch(ImageIdAction(imageId))
    dispatch(NewImageAction(image))
  }

  const SearchBar = (
      <CustomTextInput
        returnKeyType="search"
        iconName="search"
        title="addNewItemsImage.searchBar"
        onChangeText={setSearchQuery}
        onEndEditing={() => dispatch(ImageSearchQueryAction(searchQuery))}
      >
        {query}
      </CustomTextInput>
  )

  const RenderItems = memo(({ item }: Props) => (
    <>
    <Pressable 
      style={styles.imagesContainer}
      onPress={() => selectImage(item.urls.regular, item.id)}
    >
      <Image
        resizeMethod="scale"
        resizeMode="cover"
        source={{ uri: item.urls.small }}
        style={styles.image}
      />
    </Pressable>
    
    <View style={[styles.unSplashLinksContainer, { backgroundColor: colors.unsplashTextBg }]}>
      <CustomText
        title
        setModalTitle
        text={ ' ' + item.user.name }
        size={colors.bigButtonTextSize}
        color={colors.unsplashText}
        onPress={() => Linking.openURL(item.user.links.html + '?utm_source=BudgetPal&utm_medium=referral')}
      />

      <CustomText
        title
        setModalTitle
        langText="addNewItemsImage.unsplashSponsored"
        size={colors.bigButtonTextSize}
        color={colors.unsplashText}
        onPress={() => Linking.openURL('https://unsplash.com/?utm_source=BudgetPal&utm_medium=referral')}
      />
    </View>

    </>
  ))

  const listEmAll = (
    <FlatList
      initialNumToRender={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={imageList}
      renderItem={({ item }) => <RenderItems item={item} />}
      keyExtractor={item => item.urls.regular}
      onEndReached={() => onEndReached()}
      onEndReachedThreshold={2}
      extraData={imageList}
      ListHeaderComponent={SearchBar}
      ListHeaderComponentStyle={styles.searchContainer}
    />
  )

  return (
    <View style={styles.container}>
      {listEmAll}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imagesContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imagesContentContainer: {
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    marginBottom: 10,
    width: Dimensions.get('window').width/1.5,
    height: Dimensions.get('window').height / 4,
  },
  searchContainer: {
    width: Dimensions.get('window').width/1.5
  },
  unSplashLinksContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})
