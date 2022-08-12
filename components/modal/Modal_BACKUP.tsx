import * as React from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import { useTheme } from "@react-navigation/native"
import Modal from 'react-native-modal'
import { BlurView } from 'expo-blur'
import { CustomText } from '../text'
import { TextButton } from '../buttons'

export function MyModal (props: any) {
  const { colors } = useTheme()

  return (
    <Modal
      {...props}
      avoidKeyboard
      style={[ styles.modalContainer, props.modalContainerStyle ]}
      isVisible={props.toggle}
      useNativeDriverForBackdrop
      useNativeDriver={false}
      hideModalContentWhileAnimating
      propagateSwipe
      swipeDirection={'down'}
    >
      {
      props.blurView ? 
      <BlurView
        intensity={100}
        style={styles.blurred}>
          {props.children}
        </BlurView> : 
      (
      <View style={[styles.container, props.containerStyle, { backgroundColor: colors.cardBg, height: Dimensions.get('window').height / props.height }]}>

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

        <View style={[props.childrenContainerStyle, { width: Dimensions.get('window').width / 1.2 }]}>
          {props.children}
        </View>

        { props.showButton &&
          <TextButton
            containerStyle={[styles.buttonContainer, props.buttonContainerStyle]}
            langText={props.buttonText}
            iconName={props.buttonIconName}
            buttonWidth={props.buttonWidth}
            onPress={props.buttonOnPress}
          />
        }
      </View>
      )}
    </Modal>
  )
}

MyModal.defaultProps = {
  toggle: false,
  titleText: "test.i18nTest",
  buttonText: "test.i18nTest",
  iconName: "x",
  buttonWidth: 150,
  height: 300
}


const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
  },
  container: {
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  titleContainer: {
    marginTop: 35,
    height: 60,
    alignItems: 'center',
  },
  title: {
    lineHeight: 60,
  },
  childrenContainer: {
    width: Dimensions.get('window').width / 1.1
  },
  buttonContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  dragBorder: {
    width: 30,
    height: 5,
    zIndex: 1,
    position: 'absolute',
    top: 10,
    borderBottomLeftRadius: 2.5,
    borderBottomRightRadius: 2.5,
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5
  },
  blurred: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: Dimensions.get('window').height / 3
  }
})
