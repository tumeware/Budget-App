import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { IconButton } from '../buttons/iconButton'
import { CustomText } from './text'
import { PressableContainer } from '../pressable'

export function SettingsItem (props: any) {
  const { colors } = useTheme()
  return (
    <PressableContainer containerStyle={{ marginBottom: 10 }} childrenContainerStyle={styles.container} onPress={props.onPress}>
      <View style={styles.iconTextContainer}>
        <IconButton
          noBorder
          backgrounbdColor="rgba(0,0,0,0)"
          iconSize={ colors.pliIconSize }
          iconName={props.iconName}
          onPress={props.onPress}
        />
        <CustomText
          title
          langText={props.langText}
          size={ colors.pliBigTextSize }
          color={colors.cardText}
        />
      </View>
      <IconButton
        noBorder
        backgrounbdColor="rgba(0,0,0,0)"
        iconSize={ colors.pliIconSize }
        iconName="chevron-right"
        onPress={props.onPress}
      />
    </PressableContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50
  },
  iconTextContainer: {
    alignContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50
  }
})
