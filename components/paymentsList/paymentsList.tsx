import React, { useCallback } from "react"
import { FlatList } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { PaymentsListItem } from '../text/paymentsListItem'
import { LocaleNumber } from '../localeNumber/LocaleNumber'

import { DeleteDueAction  } from '../../store'

type Props = {
  onChangeDescription: Function,
  onChangeMoney: Function,
  closeButtonOnPress: Function
}

export function PaymentsList (props: Props) {
  const dispatch = useDispatch()
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

  const listDues = (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={renderDues}
      initialNumToRender={3}
      keyExtractor={due => due.id}
      extraData={dues}
    />
  )

  //return listDues
  return {
    data: DATA,
    renderItem: renderDues,
    extraData: dues
  }
}
