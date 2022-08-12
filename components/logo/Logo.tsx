import * as React from "react"
import { StyleSheet, useColorScheme, Image, Dimensions, View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

const darkImage = require('../../assets/images/logoD.png')
const lightImage = require('../../assets/images/logoL.png')


export function Logo (props: any) {
  const darkMode = useColorScheme()
  return (
    <SafeAreaView style={[style.container, props.containerStyle]}>
      <Image
        {...props}
        source={darkMode === 'dark' ? darkImage : lightImage}
        resizeMethod="scale"
        style={[style.image, { width: props.width ? props.width : '22%', height: props.height ? props.height : '50%' }]}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  image: {
    width: '22%',
    height: '50%'
  }
})
