import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { CircleButton } from '../buttons/circleButton'
import { IconButton } from '../buttons/iconButton'
import { CustomText } from '../text/text'
import { LocaleDate } from '../localeDate/LocaleDate'

export function PaymentsListItem (props: any) {
  const { colors } = useTheme()
  return (
    <View style={styles.container}>

      <View style={styles.CircleTextsContainer}>
        <CircleButton text={props.circleNumber} textSize={ colors.pliBigTextSize } />

        <View style={styles.TextsContainer}>
          <CustomText
            title
            text={props.title}
            size={ colors.pliBigTextSize }
            color={colors.cardText}
          />

          <View style={styles.MoneydateContainer}>
            <CustomText
              title
              text={props.money}
              size={ colors.pliSmallTextSize }
              color={colors.cardText}
            />
            <CustomText
              title
              text=" | "
              size={ colors.pliSmallTextSize }
              color={colors.cardText}
            />
            <LocaleDate {...props} size={colors.pliSmallTextSize} />
          </View>

        </View>
      </View>

      <IconButton
        noBorder
        iconSize={ colors.pliIconSize }
        iconName="x"
        onPress={props.onPressDelete}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 20
  },
  CircleTextsContainer: {
    alignContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50
  },
  TextsContainer: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    marginLeft: 15
  },
  MoneydateContainer: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
})
