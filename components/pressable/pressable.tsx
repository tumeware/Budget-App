import * as React from "react"
import { Pressable, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import * as Device from 'expo-device'

export function PressableContainer (props: any) {
  const { colors } = useTheme()

  const showPressable = (
    <Pressable
      {...props}
      hitSlop={props.hitSlop ? props.hitSlop : 10}
      android_ripple={{color: colors.bigButtonAndroidRippleColor}}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? Device.osName === "iOS" ? colors.bigButtonAndroidRippleColor : null : null,
          borderRadius: props.borderRadius
        },
        props.containerStyle
        ]}
    >
      <View style={props.childrenContainerStyle}>
        {props.children}
      </View>
    </Pressable>
  )

  const doNotShowPressable = (
    <View
      {...props}
      style={props.containerStyle}
    >
      <View style={props.childrenContainerStyle}>
        {props.children}
      </View>
    </View>
  )


  return props.noPressable ? doNotShowPressable : showPressable
}