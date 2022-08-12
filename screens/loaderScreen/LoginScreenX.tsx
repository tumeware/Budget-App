import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { useSelector } from 'react-redux'
import { AdMobRewarded } from 'expo-ads-admob'
import { BigImage, ColorSwitch, Card, ItemsList } from '../../components'

const darkImage = require('../../assets/images/dark.jpg')
const lightImage = require('../../assets/images/light.jpg')

export default function HomeScreen({navigation}) {

  React.useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () =>
      navigation.navigate('AddNewItem')
    )
    return () => AdMobRewarded.removeAllListeners()
  }, [])

  const { colors } = useTheme()
  const darkMode = useSelector(state => state.darkMode.darkMode)
  const newName = useSelector(state => state.newName.newName)

  return (
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage showLogo testID="bigImageTest" source={darkMode ? darkImage : lightImage} />
      <ColorSwitch style={styles.switch} />
      <Card showButton buttonWidth={125} buttonText="homeScreen.newButton" iconName="plus" titleText="card.title" onPress={() => navigation.navigate('AddNewItem')}>
        <ItemsList />
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
  },
  switch: {
    position: 'absolute',
    top: '5%',
    right: 10,
  },
})
