import React, { useState, useRef, useCallback } from 'react'
import { StyleSheet, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { useTheme } from "@react-navigation/native"
import { AdMobInterstitial } from 'expo-ads-admob'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid/non-secure'
import { Modalize } from 'react-native-modalize'

import { BigImage, Card, Item, PaymentsListItem, LocaleNumber, ModalHandle, InfoModal, AddPayment, TextButton, AdInterstitial } from '../../components'

import { NewNameAction, NewDescriptionAction, NewBudgetAction, NewDeadlineAction, NewCurrencyAction, NewImageAction, NewPaymentAction, FavoriteAction, DeleteDueAction } from '../../store'

export function ItemScreen({navigation}: any) {
  const { colors } = useTheme()
  const dispatch = useDispatch()

  const modalizeRef1 = useRef<Modalize>(null)
  const modalizeRef2 = useRef<Modalize>(null)
  const modalizeRef3 = useRef<Modalize>(null)

  const item = useSelector(state => state.item.item)
  const itemsList = useSelector(state => state.itemsList.itemsList)
  const dues = useSelector(state => state.dues.dues)

  const [money, setMoney] = useState('')
  const [description, setDescription] = useState('')
  const [favToggle, setFavToggle] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  /*
  React.useEffect(() => {
    AdMobInterstitial.addEventListener("interstitialDidClose", () => SavePayment())
      return () => AdMobInterstitial.removeAllListeners()
  })
  */
  
  React.useEffect(() => {
    itemsList.map((x: any) => {
      if (x.id === item.id) {
        setFavToggle(x.favorite)
      }
    })
  }, [itemsList])

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

  async function EditItem() {
    dispatch(NewNameAction(item.title))
    dispatch(NewDescriptionAction(item.description))
    dispatch(NewBudgetAction(item.budgetGoal))
    dispatch(NewDeadlineAction(item.deadline))
    dispatch(NewCurrencyAction(item.currency))
    dispatch(NewImageAction(item.image))

    await navigation.navigate('AddNewItem')
  }

  function SavePayment () {
    const newDue = {
      id: 'ID-' + nanoid(24),
      itemId: item.id,
      userId: item.userId,
      date: new Date(),
      amount: money,
      description: description,
      currency: item.currency
    }
    if (description.length && money.length) {
      dispatch(NewPaymentAction(newDue))
      modalizeRef3.current?.close()
    }
  }

  const addPaymentModalClose = () => {
    setDescription('')
    setMoney('')
  }

  const infoModal = async () => {
    setModalTitle('infoModal.modalTitle')
    modalizeRef1.current?.open()
  }

  const listPaymentsModal = async () => {
    setModalTitle('paymentsList.modalTitle')
    modalizeRef2.current?.open()
  }

  const paymentsModal = async () => {
    setModalTitle('itemScreen.title')
    modalizeRef3.current?.open()
  }

  return (
    <>
    <View style={[styles.container, {backgroundColor: colors.containerBg}]}>
      <BigImage
        showLeftButton
        leftIconButtonName="arrow-left"
        leftButtonOnPress={() => navigation.navigate('Home')}
        showRightButton
        rightIconButtonName="edit"
        rightButtonOnPress={EditItem}
        showCircle
        testID="bigImageTest"
        source={{uri: item.image}}
      />
      <Card
        topRightIconButtonName="star"
        topRightButtonIconColor={favToggle ? colors.cardFavBtnIcnS : colors.cardFavBtnIcn}
        topRightButtonOnPress={() => dispatch(FavoriteAction(item.id, !favToggle))
        }

        infoIconButtonName="help-circle"
        infoButtonOnPress={ infoModal }

        itemsIconButtonName="list"
        itemsButtonOnPress={ listPaymentsModal }
        
        showButton
        buttonWidth={125}
        buttonText="itemScreen.bigButton"
        iconName="plus"
        text={item.title}
        onPress={paymentsModal}
      >
        <Item />
      </Card>
      
    </View>
    
      <Modalize
        ref={ modalizeRef1 }
        adjustToContentHeight
        HeaderComponent={ <ModalHandle titleText={modalTitle} /> }
        handlePosition="inside"
        modalStyle={[styles.modalContainer, { backgroundColor: colors.cardBg }]}
        childrenStyle={styles.modalContentContainer}
        handleStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
        onBackButtonPress={ () => modalizeRef3.current?.close() }
      >
        <InfoModal />
      </Modalize>

      
      <Modalize
        ref={ modalizeRef2 }
        snapPoint={ Dimensions.get('window').height / 2 }
        modalTopOffset={90}
        threshold={50}
        velocity={undefined}
        HeaderComponent={ <ModalHandle titleText={modalTitle} /> }
        handlePosition="inside"
        flatListProps={{
          data: DATA,
          renderItem: renderDues,
          showsVerticalScrollIndicator: false, 
          showsHorizontalScrollIndicator: false,
          keyExtractor: due => due.id,
          extraData: dues,
          initialNumToRender: 5
        }}
        modalStyle={[styles.modalContainer, { backgroundColor: colors.cardBg }]}
        childrenStyle={styles.modalContentContainer}
        handleStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
        onBackButtonPress={ () => modalizeRef3.current?.close() }
      />

      
      <Modalize
        ref={ modalizeRef3 }
        adjustToContentHeight
        HeaderComponent={ <ModalHandle titleText={modalTitle} /> }
        onClosed={addPaymentModalClose}
        FooterComponent={
          <View style={styles.buttonContainer}>
            <TextButton
              disabled={ description.length > 0 && money.length > 0 ? false : true }
              langText="itemScreen.bigButton"
              iconName="plus"
              buttonWidth={150}
              onPress={() => SavePayment()}
              containerStyle={{ opacity: description.length > 0 && money.length > 0 ? 1 : 0.5 }}
            />
          </View>
        }
        handlePosition="inside"
        modalStyle={[styles.modalContainer, { backgroundColor: colors.cardBg }]}
        childrenStyle={styles.modalContentContainer}
        handleStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
        onBackButtonPress={ () => modalizeRef3.current?.close() }
      >
        <KeyboardAvoidingView behavior={"height"}>
          <AddPayment
            onChangeDescription={txt => setDescription(txt)}
            onChangeMoney={txt => setMoney(txt.split(",").join(""))}
            value={money.split(",").join("")}
          />
        </KeyboardAvoidingView>
      </Modalize>
    
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },
  modalContentContainer: {
    width: Dimensions.get('window').width / 1.2,
    marginBottom: 30
  },
  buttonContainer: {
    zIndex: 1,
    alignItems: 'flex-end',
    marginTop: -30,
    marginBottom: 30
  }
})

