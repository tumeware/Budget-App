import React from 'react'
import { StyleSheet, useColorScheme, SafeAreaView } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AdBanner } from '../components'

import { myDarkTheme, myDefaultTheme } from "../theme/colors"

import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import MainNavigator from './MainNavigator'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation() {
  const scheme = useColorScheme()
  

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={scheme === 'dark' ? myDarkTheme : myDefaultTheme}>
      <RootNavigator />
      <SafeAreaView style={[ styles.adContainer, { backgroundColor: scheme === 'dark' ? "#2C2C2C" : "#EFEFEF" } ]}>
        <AdBanner />
      </SafeAreaView>
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={MainNavigator} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  adContainer: {
    alignItems: 'center'
  }
})
