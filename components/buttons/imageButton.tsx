import * as React from "react"
import { Pressable, StyleSheet, Image, View } from "react-native"
import * as Device from 'expo-device'
import { useTheme } from "@react-navigation/native"

export function ImageButton (props) {
  const { colors } = useTheme()
  return (
    <Pressable
      style={props.containerStyle}
      key={props.id}
      hitSlop={20}
      android_ripple={{color: colors.imageItemAndroidRippleColor}}
      onPress={props.onPress}
        style={({pressed}) => [
          styles.container,
          props.containerStyle,
          {
            borderColor: colors.smallButtonBorderColor,
            backgroundColor: pressed ? Device.osName === "iOS" ? colors.bigButtonAndroidRippleColor : null : null,
          }
          ]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: props.imageUri }}
          resizeMethod="scale"
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1
  },
  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 50,
    width: '100%',
    height: '100%'
  }
})
