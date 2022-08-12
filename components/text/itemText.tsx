import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import { CustomText } from './text'


export function ItemText (props: any) {
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <CustomText
        title
        langText={props.leftLangText}
        size={props.textSize ? props.textSize : colors.bigButtonTextSize}
        color={colors.cardText}
        containerStyle={styles.leftTextContainer}
      />

      { props.righText &&

      <CustomText
        title
        text={props.righText}
        size={props.textSize ? props.textSize : colors.bigButtonTextSize}
        color={colors.cardText}
        containerStyle={styles.rightTextContainer}
      />

      }
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
    marginBottom: 5
  }
})
