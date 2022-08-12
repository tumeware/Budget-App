import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import i18n from 'i18n-js'
import { useTheme } from "@react-navigation/native"
import { CustomText } from '../text'

export function Timer(props: any) {
  const { colors } = useTheme()

  const calculateTimeLeft = () => {
    const difference = +new Date(props.deadline ? props.deadline : 0) - +new Date() // '2021-04-09T07:05:08.596Z'
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        [i18n.t('timer.days')]: Math.floor(difference / (1000 * 60 * 60 * 24)),
        [i18n.t('timer.hours')]: Math.floor((difference / (1000 * 60 * 60)) % 24),
        [i18n.t('timer.minutes')]: Math.floor((difference / 1000 / 60) % 60),
        //[i18n.t('timer.seconds')]: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  },[timeLeft])

  let timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <Text>
        {timeLeft[interval]} {interval}{" "}
      </Text>
    )
  })

  return (
    <CustomText 
      key={1+1}
      title
      size={props.textSize ? props.textSize : colors.bigButtonTextSize}
      color={colors.cardText}
      text={timerComponents.length ? timerComponents : i18n.t('timer.timeEnd')} 
    />
  )
}
