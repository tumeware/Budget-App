import * as React from "react"
import { Pressable, StyleSheet } from "react-native"
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { CustomText } from '../text/text'

export function TextButton (props) {
  const { colors } = useTheme()

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Pressable
        { ...props }
        hitSlop={5}
        android_ripple={{color: colors.bigButtonAndroidRippleColor}}
        style={[
          style.buttonContainer,
          {
            backgroundColor: colors.bigButtonBgColor,
            color: colors.bigButtonIconTextColor,
            width: props.buttonWidth,
            borderColor: colors.bigButtonBorder,
          },
          props.containerStyle
        ]}
      >
        <Feather
          name={props.iconName}
          size={colors.iconSize}
          color={colors.bigButtonIconTextColor}
          style={style.iconContainer}
        />
        <CustomText
          {...props}
          title
          nativeID={props.nativeID}
          testID={props.testID}
          langText={props.langText}
          size={colors.bigButtonTextSize}
          color={colors.bigButtonIconTextColor}
          containerStyle={style.textContainer}
        />
      </Pressable>
    )
  }
}

TextButton.defaultProps = {
  iconName: 'home',
  langText: 'test.i18nTest',
  buttonWidth: null,
  nativeID: "textButton",
  testID: "textButtonTest",
}

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
  },
  iconContainer: {
    textAlign: 'center',
    width: '30%',
    height: 50,
    lineHeight: 50,
  },
  textContainer: {
    width: '70%',
  }
})
