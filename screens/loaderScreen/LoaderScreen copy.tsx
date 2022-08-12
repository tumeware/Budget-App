import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useTheme } from "@react-navigation/native"
import * as SplashScreen from 'expo-splash-screen'
import * as firebase from 'firebase'
import { Logo } from '../../components'

export function LoaderScreen({navigation}) {
  const { colors } = useTheme()
  const [appIsReady, setAppIsReady] = useState(false)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Make any API calls you need to do here:
        
        await firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setLogin(true)
            //navigation.replace('Home')
          } else {
            setLogin(false)
            //navigation.replace('Login')
          }
        })
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render

        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
      if (login) {
        await navigation.replace('Home')
      } else {
        await navigation.replace('Login')
      }
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={[styles.container, { backgroundColor: colors.themeColor }]}>
      <Logo />
      <ActivityIndicator style={styles.indicator} size="large" color={colors.bigButtonIconTextColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
})
