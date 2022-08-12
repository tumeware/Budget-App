import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from "react-native"
import { useTheme } from "@react-navigation/native"
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { useSelector } from 'react-redux'
import { CustomText } from '../text/text'
import { LocaleNumber } from '../localeNumber'
import { PressableContainer } from '../pressable'

export function Circle (props: { leftText: any }) {
  const { colors } = useTheme()
  const item = useSelector(state => state.item.item)
  const dues = useSelector(state => state.dues.dues)
  const [smallTextSize] = useState(18)
  const [amountTextSize] = useState(42)
  const [toggle, setToggle] = useState(false)

  let totalDues = 0, calcDues = 0, circlePercent = 0
  totalDues = dues.map((x: { itemId: any; amount: string | number }) => {
    if (x.itemId === item.id) {
      return +x.amount
    }
    return null
  }).filter(n => n)
  totalDues = totalDues.reduce((a, b) => a + b, 0)
  calcDues = totalDues
  totalDues = item.budgetGoal - totalDues

  circlePercent = totalDues * 100 / item.budgetGoal
  
  const buttonToggle = () => {
    setToggle(!toggle)
  }

  const showNumbers = (
    toggle
      ?
      <LocaleNumber value={calcDues.toFixed(2)} currency={item.currency} />
      :
      <LocaleNumber value={totalDues.toFixed(2)} currency={item.currency} />
  )
  
  return (
    <View style={styles.container}>
      <View style={[styles.circleContainer, { backgroundColor: colors.circleBackground }]}>
        <AnimatedCircularProgress
          size={Dimensions.get('window').height/4.7}
          width={Dimensions.get('window').height/80}
          rotation={0}
          fill={circlePercent}
          tintColor={colors.themeColor}
          backgroundColor={colors.card}
        >
          {
            (fill) => (
              <View style={styles.itemsContainer}>

                <View style={styles.topTextsContainer}>
                  <PressableContainer onPress={buttonToggle}>
                    <CustomText
                      title
                      langText="circle.leftTopText"
                      size={smallTextSize}
                      color={!toggle ? colors.imageItemTxt : colors.circleUntouchText}
                      style={styles.leftTopText}
                      containerStyle={styles.textContainer}
                    />
                  </PressableContainer>
                  <PressableContainer onPress={buttonToggle}>
                    <CustomText
                      title
                      langText="circle.rightTopText"
                      size={smallTextSize}
                      color={toggle ? colors.imageItemTxt : colors.circleUntouchText}
                      style={styles.rightTopText}
                      containerStyle={styles.textContainer}
                    />
                  </PressableContainer>
                </View>

                <View style={[styles.bottomTextsContainer, {height: amountTextSize}]}>
                  <CustomText
                    text={
                      totalDues > 0
                      ?
                      showNumbers
                      :
                      <CustomText
                        title
                        langText="circle.rightTopText"
                        size={amountTextSize}
                        color={colors.imageItemTxt}
                      />
                    }
                    size={amountTextSize}
                    color={colors.imageItemTxt}
                    style={[styles.amountText, { height: amountTextSize, lineHeight: amountTextSize }]}
                  />
                </View>
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Dimensions.get('window').height/7.5,
    top: 0,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  circleContainer: {
    zIndex: 1,
    borderRadius: Dimensions.get('window').height
  },
  textContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textStyle: {
    textAlign: 'center',
  },
  pressableContainer: {
    //flex: 1
  },
  itemsContainer: {
    //backgroundColor: 'red',
    alignItems: 'center'
  },
  // top
  topTextsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftTopText: {
    textAlign: 'left',
    marginRight: 5
  },
  rightTopText: {
    textAlign: 'right',
    marginLeft: 5
  },
  // bottom
  bottomTextsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  amountText: {
    textAlign: 'left',
    alignSelf: 'flex-end'
  },
  currencyText: {
    textAlign: 'right',
    alignSelf: 'flex-end'
  }
})
