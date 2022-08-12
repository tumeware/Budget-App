import React, { useEffect } from 'react'
import { View, Platform, Image, StyleSheet  } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { useSelector, useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import i18n from 'i18n-js'

import { NewImageAction } from './AddNewItems.action'

import { TextButton } from '../buttons'

export function AddNewItemsImage(props) {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const image = useSelector(state => state.newImage.newImage)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        ImagePicker.requestCameraPermissionsAsync()
        ImagePicker.MediaTypeOptions.Images
        ImagePicker.VideoExportPreset.MediumQuality
        if (status !== 'granted') {
          alert(i18n.t('addNewItemScreen.cameraPermissionDenied'))
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [12, 16],
      quality: 1,
    })

    if (!result.cancelled) {
      await dispatch(NewImageAction(result.uri))
    }
  }

  return (
    <View style={styles.container}>
      <TextButton
        containerStyle={styles.buttonContainer}
        langText="addNewItemScreen.selectImageButton"
        iconName="image"
        buttonWidth={150}
        onPress={image ? () => dispatch(NewImageAction(null)) : pickImage}
      />
      {image && <View><Image source={{ uri: image }} style={{ width: 75, height: 100 }} /></View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
