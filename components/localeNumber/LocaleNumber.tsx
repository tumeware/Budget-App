import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { locale } from "expo-localization"
import NumberFormat from 'react-number-format'

export function LocaleNumber(props: any) {
  const [myLocale, saveMyLocale] = useState(false)
  const [myPreFix, saveMyPreFix] = useState('')
  const [mySuffix, saveMySuffix] = useState('')

  useEffect(() => {
    switch (locale) {

      case "en-AR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "es-AR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-AT":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "de-AT":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-BR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break
    
      case "pt-BR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "es-BR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-CL":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break
    
      case "arn-CL":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "es-CL":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "yue-CN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "zh-CN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-CN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ii-CN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "bo-CN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ug-CN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-CO":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "es-CO":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "yue-HK":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "zh-HK":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "zh-HK":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-HK":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "as-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "bn-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "brx-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ccp-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "gu-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "hi-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "kn-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ks-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "kok-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ml-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "mni-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "mr-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ne-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "or-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "pa-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "sa-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "sat-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ta-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "te-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "bo-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ur-IN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ar-ISR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-ISR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "he-ISR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-JPN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ja-JPN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-KR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ko-KR":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-MY":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ms-MY":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ta-MY":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-MX":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "es-MX":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-NZ":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "mi-NZ":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-NO":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "se-NO":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "nb-NO":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "nn-NO":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ceb-PH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-PH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "fil-PH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "es-PH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "zh-SG":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-SG":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ms-SG":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ta-SG":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "af-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "nso-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "nr-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-PH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "st-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ss-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ts-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "tn-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "ve-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "xh-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "zu-ZA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "fr-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "de-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "it-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "pt-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "rm-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "gsw-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "wae-CH":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-US":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-CA":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-GB":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "zh-TW":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "en-TW":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "trv-TW":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      case "vi-VN":
        saveMyLocale(true)
        saveMyPreFix(props.currency)
        saveMySuffix('')
        break

      default:
        saveMyLocale(false)
        saveMyPreFix('')
        saveMySuffix(props.currency)
    }
  }, [locale])

  return (
    <NumberFormat
      {...props}
      thousandSeparator={myLocale ? myLocale : null}
      prefix={myPreFix}
      suffix={props.noSuffix ? null : mySuffix}
      displayType={'text'}
      renderText={value => <Text>{value}</Text>}
    />
  )
}
