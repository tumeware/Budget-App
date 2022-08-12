import React from 'react'
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { useSelector } from 'react-redux'
import { CustomText } from '../text'
import { LocaleNumber } from '../localeNumber/LocaleNumber'

type Props = {
  onChangeDescription: Function,
  onChangeMoney: Function,
  closeButtonOnPress: Function,
  toggle: number,
  ref: any
}

export function InfoModal (props: Props) {
  const { colors } = useTheme()
  const item = useSelector(state => state.item.item)

  return (
    <>
      <View style={styles.textContainer}>
        <CustomText
          style={styles.leftBottomText}
          title size={colors.bigButtonTextSize} 
          color={colors.textColor}
          langText="infoModal.budgetTitle"
        />
        <View style={[styles.border, { backgroundColor: colors.textColor }]} />
        <CustomText
          style={styles.leftBottomText}
          title size={colors.bigButtonTextSize} 
          color={colors.textColor}
          text={<LocaleNumber value={item.budgetGoal} currency={item.currency} />}
        />
      </View>

      <View style={styles.textContainer}>
        <CustomText
          style={styles.leftBottomText}
          title size={colors.bigButtonTextSize} 
          color={colors.textColor}
          langText="infoModal.descriptionTitle"
        />
        <View style={[styles.border, { backgroundColor: colors.textColor }]} />
        <CustomText
          style={styles.leftBottomText}
          title size={colors.bigButtonTextSize} 
          color={colors.textColor}
          text={item.description}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  textContainer: {
    marginBottom: 25
  },
  border: {
    height: 3,
    width: '10%',
    marginTop: 5,
    marginBottom: 10
  }
})
