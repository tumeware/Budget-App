import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Platform, useColorScheme } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { SignIn, registration, resetMail  } from '../../API/firebaseMethods';
import { BigImage, Card, CustomTextInput, CustomText, Toaster } from '../../components'

const darkImage = require('../../assets/images/dark.jpg')
const lightImage = require('../../assets/images/light.jpg')

export function LoginScreen({navigation}) {
  const { colors } = useTheme()
  const darkMode = useColorScheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [securePasswordToggle, setSecurePasswordToggle] = useState(true)
  const [titleText, setTitleText] = useState('loginScreen.loginTitle')
  const [leftBottomText, setLeftBottomText] = useState('loginScreen.leftBottomText')
  const [rightBottomText, setRightBottomText] = useState('loginScreen.rightBottomText')
  const [buttonText, setButtonText] = useState('loginScreen.loginButton')

  async function OnPressActions(x) {
    if (x === "loginScreen.loginButton") {
      /*
      if (!email) {
        Toaster("Email!", "warning")
      }
      if (!password) {
        Toaster("Password", "warning")
      }
      */

      await SignIn(email, password, navigation)
      //await navigation.navigate('Home')

    } else if (x === "loginScreen.newAccountButton") {
      //navigation.navigate('newAccount')
      await registration(email, password, navigation)
      //await navigation.navigate("Loader")
    } else {
      //navigation.navigate('ForgotPW')
      await resetMail(email, navigation)
    }
  }

  function OnPressTexts(x) {
    if (x === "loginScreen.leftBottomText") {
      setTitleText("loginScreen.forgotPWTitle")
      setButtonText("loginScreen.forgotPWButton")
      setPassword('')
    } else if (x === "backButton") {
      setTitleText("loginScreen.loginTitle")
      setButtonText("loginScreen.loginButton")
      setLeftBottomText("loginScreen.leftBottomText")
      setRightBottomText("loginScreen.rightBottomText")
      setPassword('')
    } else if (x === "loginScreen.naBottomText") {
      setTitleText("loginScreen.loginTitle")
      setButtonText("loginScreen.loginButton")
      setLeftBottomText("loginScreen.leftBottomText")
      setRightBottomText("loginScreen.rightBottomText")
      setPassword('')
    } else {
      setTitleText("loginScreen.newAccountTitle")
      setButtonText("loginScreen.newAccountButton")
      setLeftBottomText("loginScreen.naBottomText")
      setPassword('')
    }
  }

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-30} behavior={Platform.OS == 'ios' ? 'position' : 'position'} style={styles.container} contentContainerStyle={styles.container}>
      <BigImage leftButtonOnPress={() => OnPressTexts("backButton")} showLeftButton={buttonText === "loginScreen.forgotPWButton"} leftIconButtonName="arrow-left" showLogo testID="bigImageTest" source={darkMode === 'dark' ? darkImage : lightImage} />
      <Card showButton buttonWidth={125} buttonText={buttonText} iconName="log-in" titleText={titleText} onPress={() => OnPressActions(buttonText)}>
        
        <View style={styles.ItemsContainer}>

          { buttonText === "loginScreen.forgotPWButton" &&
            <CustomText
              onPress={() => OnPressTexts(leftBottomText)}
              style={styles.topText}
              title size={colors.bigButtonTextSize} 
              color={colors.textColor}
              langText={"loginScreen.rPwTopText"}
            />
          }

<View style={styles.InputsContainer}>

          <CustomTextInput autoCapitalize="none" autoCompleteType="email" keyboardType="email-address" textContentType="emailAddress" onChangeText={(e: React.SetStateAction<string>) => setEmail(e)} iconName="mail" title="loginScreen.email" maxLength={25}>{email}</CustomTextInput>

          { buttonText !== "loginScreen.forgotPWButton" &&
            <CustomTextInput textContentType="password" autoCompleteType="password" secureTextEntry={securePasswordToggle} onChangeText={(p: React.SetStateAction<string>) => setPassword(p)} containerStyle={styles.customTextInput} iconName="lock" title="loginScreen.password" maxLength={100}>{password}</CustomTextInput>
          }

</View>

          { buttonText !== "loginScreen.forgotPWButton" &&
            <View style={styles.bottomTextContainer}>
              <CustomText
                pressable
                onPress={() => OnPressTexts(leftBottomText)}
                style={styles.leftBottomText}
                title size={colors.bigButtonTextSize} 
                color={colors.textColor}
                langText={leftBottomText}
              />
              { buttonText !== "loginScreen.newAccountButton" &&
                <CustomText
                  pressable
                  onPress={() => OnPressTexts("vkxknvfnx")}
                  style={styles.rightBottomText}
                  title size={colors.bigButtonTextSize} 
                  color={colors.textColor}
                  langText={rightBottomText}
                />
              }
            </View>
          }

        </View>

      </Card>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  switch: {
    position: 'absolute',
    top: '5%',
    right: 10,
  },
  customTextInput: {
    marginTop: 15,
  },
  ItemsContainer: {
    marginTop: 15
  },
  InputsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bottomTextContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftBottomText: {
    textAlign: 'left'
  },
  rightBottomText: {
    textAlign: 'right'
  },
  topText: {
    marginBottom: 40,
    textAlign: 'center'
  }
})
