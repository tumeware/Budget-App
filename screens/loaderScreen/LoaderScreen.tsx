import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { Asset } from 'expo-asset'
import AppLoading from 'expo-app-loading'
//import * as Font from 'expo-font'
//import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'

import { Logo } from '../../components'

function cacheImages(images: any[]) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  });
}

/*
function cacheFonts(fonts: any) {
  return fonts.map((font: string | { [fontFamily: string]: Font.FontSource }) => Font.loadAsync(font));
}
*/

export function LoaderScreen({navigation}: any) {
  const { colors } = useTheme()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isReady) {
      navigation.replace('Home')
    }
  }, [isReady])

  async function _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../../assets/images/dark.jpg'),
      require('../../assets/images/light.jpg'),
      require('../../assets/images/logoD.png'),
      require('../../assets/images/logoL.png'),
      require('../../assets/images/arrowD.png'),
      require('../../assets/images/arrowL.png'),
    ]);
  
    //const fontAssets = cacheFonts([BebasNeue_400Regular]);
  
    //await Promise.all([...imageAssets, ...fontAssets]);
    await Promise.all([...imageAssets]);
  }

  const loadIt = () => {
    if (!isReady) {
      return (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/images/splash.png')} />
        </View>
      )
    }
  }

  return loadIt()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
})
