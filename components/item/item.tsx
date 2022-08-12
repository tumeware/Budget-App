import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { differenceInDays, differenceInWeeks, differenceInMonths } from 'date-fns'
import i18n from 'i18n-js'

import { ItemText } from '../text/itemText'
import { LocaleNumber } from '../localeNumber/LocaleNumber'
import { LocaleDate } from '../localeDate/LocaleDate'
//import { Timer } from '../timer/timer'

export function Item () {
  const { colors } = useTheme()
  const item = useSelector(state => state.item.item)
  const dues = useSelector(state => state.dues.dues)

  let totalDues = 0, calcDues = 0, circlePercent = 0, perDay = 0, perWeek = 0, perMonth, daysLeft
  totalDues = dues.map(x => {
    if (x.itemId === item.id) {
      return +x.amount
    }
    return null
  }).filter(n => n)
  totalDues = totalDues.reduce((a, b) => a + b, 0)
  calcDues = totalDues
  totalDues = +item.budgetGoal - +totalDues

  circlePercent = totalDues * 100 / +item.budgetGoal

  const calcDays = differenceInDays(new Date(item.deadline), new Date())
  const calcWeeks = differenceInWeeks(new Date(item.deadline), new Date())
  const calcMonths = differenceInMonths(new Date(item.deadline), new Date())

  perDay = +totalDues / +calcDays
  perDay =  +perDay.toFixed(2)
  //perDay = Math.round((+perDay) * 100) / 100
  perDay =  +perDay.toFixed(1) + '0'
  console.log(perDay)
  
  perWeek = totalDues / calcWeeks
  perWeek = +perWeek.toFixed(2)
  perMonth = totalDues / calcMonths
  perMonth = Math.round(perMonth) //perMonth.toFixed(1)
  daysLeft = calcDays

  if (perDay === Infinity) {
    perDay = totalDues
  }
  if (perWeek === Infinity) {
    perWeek = 0
  }
  if (perMonth === Infinity) {
    perMonth = 0
  }
  
  if (calcDays <= 0) {
    daysLeft = i18n.t("timer.timeEnd")
    perDay = totalDues
    perWeek = 0
    perMonth = 0
  } else if (calcDays < 1) {
    daysLeft = i18n.t("timer.oneDayLeft")
    perDay = totalDues
    perWeek = 0
    perMonth = 0
  } else if (calcDays === 1) {
    daysLeft = i18n.t("timer.DayLeft")
    perDay = totalDues
    perWeek = 0
    perMonth = 0
  }

  daysLeft = daysLeft.toString()

  const creditCardIcon = (
    <View style={styles.iconContainer}>
      <Feather
        name="credit-card"
        size={colors.iconSize}
        color={colors.smallButtonIconColor}
        style={styles.icon}
      />
    </View>
  )

  const clockIcon = (
    <View style={styles.iconContainer}>
      <Feather
        name="clock"
        size={colors.iconSize}
        color={colors.smallButtonIconColor}
        style={styles.icon}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      {creditCardIcon}
      <ItemText leftLangText="item.goalTitle" />
      <ItemText leftLangText="item.day" righText={<LocaleNumber value={perDay} currency={item.currency} />} />
      <ItemText leftLangText="item.week" righText={<LocaleNumber value={perWeek} currency={item.currency} />} />
      <ItemText leftLangText="item.month" righText={<LocaleNumber value={perMonth} currency={item.currency} />} />

      {clockIcon}
      <ItemText leftLangText="item.left" righText={daysLeft} />
      <ItemText leftLangText="item.date" righText={<LocaleDate date={item.deadline} />} />
    </View>
  )
}

// calcDays.toString()
// <Timer deadline={item.deadline} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  iconContainer: {
    //borderWidth: 1,
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,.10)'
  },
  icon: {
    textAlign: 'center',
    width: 30,
    lineHeight: 30
  }
})
