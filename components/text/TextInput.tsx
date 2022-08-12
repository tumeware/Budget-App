import * as React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { CustomText } from '../text/text'
import { PressableContainer } from '../pressable/pressable'

export function CustomTextInput(props: any) {
  const { colors } = useTheme()
  return (
    <PressableContainer {...props} borderRadius={20}>
    <View style={[styles.container, props.containerStyle]}>

      <View style={styles.iconTextContainer}>
        <View style={styles.iconContainer}>
          <Feather
            name={props.iconName}
            size={colors.iconSize}
            color={props.iconColor ? props.iconColor : colors.smallButtonIconColor}
            style={styles.icon}
          />
        </View>

        <CustomText
          title
          size={colors.bigButtonTextSize}
          color={colors.cardTitle}
          style={styles.title}
          containerStyle={styles.titleContainer}
          langText={props.title}
          onPress={props.textOnPress}
        />
      </View>

      <View style={[{borderBottomColor: colors.borderBottomColor}, styles.textInputContainer]}>
        { props.noInput ?
          <CustomText
            size={colors.bigButtonTextSize}
            color={colors.textColor}
            containerStyle={props.containerStyle}
            text={props.children}
          />
          :
          <TextInput
            {...props}
            disableFullscreenUI
            blurOnSubmit
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            autoCompleteType="off"
            style={[{
              fontFamily:'BebasNeue_400Regular',
              color: colors.textColor,
              fontSize: 16 },
              props.style]}
            >
              {props.children}
          </TextInput>
        }

      </View>

    </View>
    </PressableContainer>
  )
}

CustomTextInput.defaultProps = {
  titleText: 'test.i18nTest',
  iconName: 'plus',
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 25,
    width: '100%'
  },
  iconTextContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  iconContainer: {
    //backgroundColor: 'red',
    marginRight: 10
  },
  icon: {
    textAlign: 'center'
  },
  textInputContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 1
  },
  titleContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  title: {
    textAlign: 'left'
  },
})
