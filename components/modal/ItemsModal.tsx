import React, { useMemo, useCallback, useRef } from 'react'
import { StyleSheet, View, Dimensions } from "react-native"
import { useTheme } from "@react-navigation/native"
import { useSelector, useDispatch } from 'react-redux'
import { Modalize } from 'react-native-modalize'
import { FlatList}  from 'react-native-gesture-handler';

import { ModalAction, DeleteDueAction } from '../../store'

import { CustomText } from '../text/text'
import { TextButton } from '../buttons/textButton'
import { ModalBottom } from './ModalBottom'
import { ModalHandle } from './ModalHandle'
import { PaymentsListItem } from '../text/paymentsListItem'
import { LocaleNumber } from '../localeNumber/LocaleNumber'

import { InfoModal } from '../infoModal/infoModal'
import { AddPayment } from '../addPayment/addPayment'

export function ItemsModal (props: any) {
  const { colors } = useTheme()
  const dispatch = useDispatch()

  // ref
  const modalizeRef = useRef<Modalize>(null)

  // variables
  const snapPoints = useMemo(() => [0, '40%', '60%', '90%'], []);

  // callbacks
  modalizeRef.current?.open()

  const handleSheetChanges = useCallback((index: number) => {
    dispatch(ModalAction(index))
  }, [])

  const dues = useSelector(state => state.dues.dues)
  const item = useSelector(state => state.item.item)

  const DATA = dues.map((x: { itemId: any; amount: string | number }) => {
    if (x.itemId === item.id) {
      return x
    }
  }).filter((n: any) => n)

  const renderDues = useCallback(
    ({ item, index }: any) => (
      <PaymentsListItem
        circleNumber={index + 1}
        title={item.description}
        money={<LocaleNumber value={item.amount} currency={item.currency} />}
        date={item.date}
        onPressDelete={() => dispatch(DeleteDueAction(item.id))}
      />
    ),
    []
  )

  return (
      <Modalize
        ref={ modalizeRef }
        snapPoint={300}
        style={[styles.container, { backgroundColor: colors.cardBg }]}
      >
        <View style={[styles.container, props.containerStyle, { backgroundColor: colors.cardBg }]}>

          <View style={styles.titleContainer}>
            <CustomText
              title
              size={colors.titleSize}
              color={colors.cardTitle}
              style={styles.title}
              langText={props.modalTitle}
            />
          </View>

          <View style={[styles.modalContainer, props.childrenContainerStyle]}>

            { props.modalType === 'InfoModal' &&
            <InfoModal {...props} />
            }

            { props.modalType === 'AddPayment' &&
            <AddPayment
              {...props}
              onChangeDescription={props.onChangeDescription}
              onChangeMoney={props.onChangeMoney}
              closeButtonOnPress={props.addPaymentCloseButtonOnPress}
            />
            }

            { props.showButton &&
            <View style={styles.buttonContainer}>
              <TextButton
                containerStyle={[props.buttonContainerStyle]}
                langText={props.buttonText}
                iconName={props.buttonIconName}
                buttonWidth={props.buttonWidth}
                onPress={props.buttonOnPress}
              />
            </View>
          }
          </View>

        </View>

      </Modalize>
  )
}


const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  modalContainer: {
    marginLeft: Dimensions.get('window').width / 10,
    marginRight: Dimensions.get('window').width / 10,
  },
  titleContainer: {
    height: 60,
    alignItems: 'center',
  },
  title: {
    lineHeight: 60,
  },
  childrenContainer: {
    width: Dimensions.get('window').width / 1.1
  },
  buttonContainer: {
    zIndex: 1,
    alignItems: 'flex-end'
  },
  dragBorder: {
    width: 30,
    height: 5,
    zIndex: 1,
    position: 'absolute',
    top: 10,
    borderBottomLeftRadius: 2.5,
    borderBottomRightRadius: 2.5,
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5
  },
  blurred: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: Dimensions.get('window').height / 3
  }
})
