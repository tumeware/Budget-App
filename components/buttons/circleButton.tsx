import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { PressableContainer } from '../pressable'
import { CustomText } from '../text/text'

export function CircleButton (props: any) {
  const { colors } = useTheme()
  return (
    <PressableContainer onPress={props.circleOnPress} containerStyle={[styles.container, { backgroundColor: colors.iconBgColor }]}>
      <View style={styles.textContainer}>
        <CustomText
          title
          text={props.text}
          size={props.textSize}
          color={colors.iconColor}
          containerStyle={styles.textContainer}
        />
      </View>
    </PressableContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 50
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    textAlign: 'center'
  }
})
