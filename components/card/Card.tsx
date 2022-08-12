import * as React from "react"
import { StyleSheet, View, Dimensions, Platform } from "react-native"
import { useTheme } from "@react-navigation/native"
import { CustomText } from '../text/text'
import { IconButton } from '../buttons/iconButton'
import { TextButton } from '../buttons/textButton'
import { AdRevarded } from '../ad'

export function Card (props: any) {
  const { colors } = useTheme()

  return (
    <View style={style.theContainer}>

      { props.topRightIconButtonName &&
        <IconButton
          noBorder
          containerStyle={style.topRightButtonContainer}
          iconName={props.topRightIconButtonName}
          onPress={props.topRightButtonOnPress}
          iconColor={props.topRightButtonIconColor}
          backgrounbdColor={props.topRightButtonBgColor}
        />
      }

    <View
    style={[style.container, {backgroundColor: colors.cardBg}, colors.cardShadows]}>

      <View style={style.titleContainer}>
        <CustomText
          {...props}
          title
          size={colors.titleSize}
          color={colors.cardTitle}
          style={style.title}
          langText={props.titleText}
        />
      </View>

      <View style={[style.childrenContainer, props.childrenContainer]}>
        {props.children}
      </View>

    </View>

    { props.showLeftButton &&
      <IconButton
        containerStyle={style.leftButtonContainer}
        iconName={props.leftIconButtonName}
        onPress={props.leftButtonOnPress}
      />
      }

      { props.itemsIconButtonName &&
        <IconButton
          containerStyle={style.itemsButtonContainer}
          iconName={props.itemsIconButtonName}
          onPress={props.itemsButtonOnPress}
          iconColor={props.itemsButtonIconColor}
          backgrounbdColor={props.itemsButtonBgColor}
        />
      }

      { props.infoIconButtonName &&
        <IconButton
          containerStyle={style.infoButtonContainer}
          iconName={props.infoIconButtonName}
          onPress={props.infoButtonOnPress}
          iconColor={props.infoButtonIconColor}
          backgrounbdColor={props.infoButtonBgColor}
        />
      }

      { props.showButton &&
      <TextButton
        containerStyle={[style.buttonContainer, {opacity: !props.disabledButton ? 1 : 0.5}]}
        langText={props.buttonText}
        iconName={props.iconName}
        buttonWidth={props.buttonWidth}
        onPress={props.onPress ? props.disabledButton ? null : props.onPress : AdRevarded}
      />
      }
    </View>
  )
}

Card.defaultProps = {
  langText: 'test.i18nTest'
}

const style = StyleSheet.create({
  theContainer:{
    width: Dimensions.get('window').width/1.2,
    minHeight: Dimensions.get('window').height/1.6,
    marginTop: -Dimensions.get('window').height/6,
    marginBottom: Dimensions.get('window').height/13,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    marginBottom: Platform.OS === 'ios' ? 80 : 60
  },
  titleContainer: {
    height: 60,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    lineHeight: 60,
  },
  childrenContainer: {
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width / 1.5,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 60 : 40,
    right: 15,

    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  leftButtonContainer: {
    position: 'absolute',
    bottom: -25,
    left: 15
  },
  topRightButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    top: -25,
    right: 15,

    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 21
  },
  itemsButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 60 : 40,
    left: 75,
    elevation: 21
  },
  infoButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 60 : 40,
    left: 15,
    elevation: 21
  }
})
