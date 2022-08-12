import React, { useState, useEffect } from 'react'
import { locale } from "expo-localization"
import { format } from 'date-fns'
import { enUS, enGB, fi, sv } from 'date-fns/locale'
import { useTheme } from "@react-navigation/native"

import { CustomText } from '../text/text'

export function LocaleDate(props: any) {
  const { colors } = useTheme()
  const [myLocale, saveMyLocale] = useState(enGB)

  useEffect(() => {
    switch (locale) {
      case "en-US":
        saveMyLocale(enUS)
        break

      case "fi-FI":
        saveMyLocale(fi)
        break

      case "sv-SE":
        saveMyLocale(sv)
        break

      default:
        saveMyLocale(enGB)
    }
  }, [locale])

  const text = format(new Date(props.date), "PPpp", {
    locale: myLocale
  })

  return (
    <CustomText
      title
      size={props.size ? props.size : colors.bigButtonTextSize}
      color={colors.cardTitle}
      text={text}
    />
  )
}
