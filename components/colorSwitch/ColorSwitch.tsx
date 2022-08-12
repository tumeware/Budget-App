import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, View } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { DarkModeAction } from '../../theme/colors.action'

export function ColorSwitch (props) {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.darkMode.darkMode)
  return (
    <View {...props}>
      <Switch
        trackColor={{ false: "#848484", true: "#5C5C5C" }}
        thumbColor={colors.colorSwitchThumb}
        ios_backgroundColor={colors.colorSwitchTrack}
        onValueChange={() => dispatch(DarkModeAction(true ? !darkMode : darkMode))}
        value={darkMode}
      />
    </View>
  )
}
