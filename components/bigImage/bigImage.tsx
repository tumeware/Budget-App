import * as React from "react"
import { StyleSheet, View, Image, Dimensions } from "react-native"
import { Logo } from '../logo'
import { IconButton } from '../buttons'
import { Circle } from '../circle'

type Props = {
  leftIconButtonName: string,
  pageNumber: number,
  leftButtonOnPress: Function,
  rightButtonOnPress: Function,
  rightIconButtonName: string,
  showRightButton: boolean,
  showLeftButton: boolean,
  showLogo: boolean,
  showCircle: boolean
}

export function BigImage (props: Props) {
  return (
    <View style={style.container}>
      { props.showLeftButton &&
      <IconButton
        bigImageButton
        noBorder
        containerStyle={style.leftButton}
        iconName={props.leftIconButtonName}
        onPress={props.leftButtonOnPress}
      />
      }

      { props.showLogo && <Logo /> }
      { props.showCircle && <Circle /> }

      { props.showRightButton &&
      <IconButton
        bigImageButton
        noBorder
        containerStyle={style.rightButton}
        iconName={props.rightIconButtonName}
        onPress={props.rightButtonOnPress}
      />
      }
      <Image
        {...props}
        resizeMethod="scale"
        resizeMode="cover"
        style={style.image}
      />
    </View>
  )
}

BigImage.defaultProps = {
  langText: 'test.i18nTest'
}

const style = StyleSheet.create({
  container: {
    //flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  leftButton: {
    zIndex: 2,
    position: 'absolute',
    top: '10%',
    left: '8%',
  },
  rightButton: {
    zIndex: 2,
    position: 'absolute',
    top: '10%',
    right: '8%',
  }
})
