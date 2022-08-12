import * as React from "react"
import { StyleSheet } from "react-native"
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { PressableContainer } from '../pressable'

export function IconButton (props: any) {
  const { colors } = useTheme()
  const regularSize = {
    width: 50,
    height: 50
  }
  const bigImageSize = {
    width: 40,
    height: 40
  }
  return (
      <PressableContainer
        {...props}
        onPress={props.onPress}
        borderRadius={20}
        containerStyle={[
          props.containerStyle,
          styles.buttonContainer,
          props.bigImageButton ? bigImageSize : regularSize,
          {
            backgroundColor: props.backgrounbdColor ? props.backgrounbdColor : colors.cardBg, 
            borderColor: colors.smallButtonBorderColor, 
            borderWidth: props.noBorder ? 0: 1,
            borderRadius: props.bigImageButton ? 100 : 10
          }
        ]}
      >
        <Feather
          name={props.iconName}
          size={props.iconSize ? props.iconSize : colors.iconSize}
          color={props.iconColor ? props.iconColor : colors.smallButtonIconColor}
          style={styles.icon}
        />
      </PressableContainer>
  )
}

IconButton.defaultProps = {
  iconName: 'home'
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  icon: {
    textAlign: 'center'
  }
})
