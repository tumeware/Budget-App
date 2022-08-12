import React, {useState, useEffect} from 'react'
import { Platform, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker'
import { locale } from "expo-localization"
import { format } from 'date-fns'
import { fi, enUS, sv, enGB } from 'date-fns/locale'
import { NewDeadlineAction } from './AddNewItems.action'
import { CustomTextInput } from '../text'
import { MyModal } from '../modal'

export function AddNewItemsDateTime() {
  const dispatch = useDispatch()

  const newDeadline = useSelector(state => state.newDeadline.newDeadline)

  const [date, setDate] = useState(newDeadline ? new Date(newDeadline) : new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [modalToggle, setModalToggle] = useState(false)
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

  async function DateChange(event: any, showDate: any) {
    const currentDate = showDate || date
    setShow(Platform.OS === 'ios')
    setDate(new Date(currentDate))
    dispatch(NewDeadlineAction(currentDate))
  }

  const showMode = (currentMode: any) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    setModalToggle(Platform.OS == 'ios' && !modalToggle)
    showMode('date')
  }

  const showTimepicker = () => {
    setModalToggle(Platform.OS == 'ios' && !modalToggle)
    showMode('time')
  }

  const pickers = (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      display={ Platform.OS == 'ios' ? 'spinner' : 'spinner' }
      onChange={DateChange}
      locale={locale}
    />
  )

  return (
    <>
      <CustomTextInput
        containerStyle={{zIndex: 1}}
        noInput
        onChangeText={(text: any) => dispatch(NewDeadlineAction(text))}
        iconName="calendar"
        title="addNewItemScreen.deadlineDate"
        onPress={showDatepicker}
      >
        {format(new Date(date), 'PP', { locale: myLocale })}
      </CustomTextInput>

      <CustomTextInput
        containerStyle={{zIndex: 1}}
        noInput
        onChangeText={text => dispatch(NewDeadlineAction(text))}
        iconName="clock"
        title="addNewItemScreen.deadlineTime"
        onPress={showTimepicker}
      >
        {format(new Date(date), 'p', { locale: myLocale })}
      </CustomTextInput>
    
    
    {show && (
      Platform.OS == 'ios' ? 
      <MyModal blurView onBackdropPress={() => setModalToggle(!modalToggle)} toggle={modalToggle}>{pickers}</MyModal>
      :
      pickers
    )}
    </>
  )
}
