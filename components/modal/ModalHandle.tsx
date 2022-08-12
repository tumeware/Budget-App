import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"

import { CustomText } from '../text/text'

export function ModalHandle (props: any) {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBg }]}>
      <View style={[styles.dragBorder, { backgroundColor: colors.text }]}></View>

        <View style={styles.titleContainer}>
          <CustomText
            title
            size={colors.titleSize}
            color={colors.cardTitle}
            style={styles.title}
            langText={props.titleText}
          />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  dragBorder: {
    width: 30,
    height: 5,
    borderBottomLeftRadius: 2.5,
    borderBottomRightRadius: 2.5,
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5
  },
  titleContainer: {
    marginTop: 10,
    alignItems: 'center'
  }
})
