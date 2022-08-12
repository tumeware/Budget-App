import React from 'react'
import { StyleSheet, View, useColorScheme } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { AdMobRewarded } from 'expo-ads-admob'
import { useDispatch } from 'react-redux'
import { loggingOut, RemoveAccount  } from '../../API/firebaseMethods'
import { BigImage, Card, SettingsItem } from '../../components'

import { FavoriteAction  } from '../../store'

const darkImage = require('../../assets/images/dark.jpg')
const lightImage = require('../../assets/images/light.jpg')

export function ConfigScreen({ navigation }: any) {

  const { colors } = useTheme()
  const darkMode = useColorScheme()
  const dispatch = useDispatch()

  React.useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () =>
      navigation.navigate('AddNewItem')
    )
    return () => AdMobRewarded.removeAllListeners()
  }, [])

  const deleteUser = () => {
    RemoveAccount('qwerty', navigation)
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage
        showLogo
        showLeftButton
        leftIconButtonName="arrow-left"
        leftButtonOnPress={() => navigation.navigate('Home')}
        testID="bigImageTest"
        source={darkMode === 'dark' ? darkImage : lightImage}
      />
      <Card
        titleText="configScreen.title"
      >
        <SettingsItem
          iconName="log-out"
          langText="configScreen.logOut"
          onPress={() => loggingOut(navigation)}
        />
        <SettingsItem
          iconName="x-circle"
          langText="configScreen.removeAccount"
          onPress={deleteUser}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

