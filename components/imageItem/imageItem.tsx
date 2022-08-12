import * as React from "react"
import { Pressable, StyleSheet, Image, View, Dimensions } from "react-native"
import * as Device from 'expo-device'
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { CustomText } from '../text/text'

export function ImageItem (props) {
  const { colors } = useTheme()

  function whatsDevice() {
    if (Device.osName === "Android") {
      return null
    } else {
      return colors.bigButtonAndroidRippleColor
    }
  }

  return (
    <Pressable
      {...props}
      key={props.id}
      hitSlop={20}
      android_ripple={{color: colors.imageItemAndroidRippleColor}}
      onPress={props.onPress}
        style={({pressed}) => [
          style.container,
          props.containerStyle,
          {
            borderColor: colors.smallButtonBorderColor,
            backgroundColor: pressed ? Device.osName === "iOS" ? colors.bigButtonAndroidRippleColor : null : null,
          }
          ]}
    >
        {
          props.noImage ? 
          <>
            <View style={style.iconContainer}>
              <Feather
                name="plus"
                size={22}
                color={colors.smallButtonIconColor}
                style={style.icon}
              />
            </View>
            <CustomText
              ellipsizeMode="clip"
              numberOfLines={3}
              langText={props.langText}
              size={18}
              color={colors.imageItemTxt}
              style={style.textStyle}
              containerStyle={style.textContainer}
            />
          </> 
          : 
          <>
            <View style={style.imageContainer}>
              <Image
                {...props}
                resizeMethod="scale"
                resizeMode="cover"
                style={style.image}
              />
            </View>
            <CustomText
              ellipsizeMode="clip"
              numberOfLines={3}
              title
              text={props.leftText}
              size={18}
              color={colors.imageItemTxt}
              style={style.textStyle}
              containerStyle={style.textContainer}
            />
          </>
        }
    </Pressable>
  )
}

ImageItem.defaultProps = {
  iconName: 'home',
  langText: 'test.i18nTest',
  buttonWidth: null
}

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-around",
    borderRadius: 10,
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
  },
  iconContainer: {
    padding: 20,
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textStyle: {
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center'
  }
})
