import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"

export function ModalBottom () {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBg }]}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  }
})
