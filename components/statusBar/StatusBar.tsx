import React from 'react'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'

export function MyStatusBar () {
  const darkMode = useColorScheme()
  return (
    <StatusBar style={darkMode === 'dark' ? "light" : "dark"} />
  )
}
