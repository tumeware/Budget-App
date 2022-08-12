import React, { useMemo, useCallback, useRef } from 'react'
import { StyleSheet, View, Dimensions } from "react-native"
import { useTheme } from "@react-navigation/native"
import Modal from 'react-native-modal'
import { BlurView } from 'expo-blur'
import { useDispatch } from 'react-redux'
import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { ModalAction } from '../../store'

import { CustomText } from '../text/text'
import { TextButton } from '../buttons/textButton'
import { ModalBottom } from './ModalBottom'
import { ModalHandle } from './ModalHandle'

export function MyModal (props: any) {
  const { colors } = useTheme()
  const dispatch = useDispatch()

  // ref
  const bottomSheetModalRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => [0, '40%', '60%', '90%'], []);

  // callbacks
  bottomSheetModalRef.current?.snapTo(props.toggle)

  const handleSheetChanges = useCallback((index: number) => {
    dispatch(ModalAction(index))
  }, [])

  return (
    <>
    {props.blurView &&
      <Modal
        {...props}
        avoidKeyboard
        isVisible={props.toggle}
        useNativeDriverForBackdrop
        useNativeDriver={false}
        hideModalContentWhileAnimating
        propagateSwipe
        swipeDirection={'down'}
      >
        <BlurView
          intensity={100}
          style={styles.blurred}
        >
          {props.children}
        </BlurView>
      </Modal>
      }

      <BottomSheet
        ref={ bottomSheetModalRef }
        index={0}
        snapPoints={snapPoints}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        onChange={handleSheetChanges}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={() => props.blurView ? <View /> : <ModalHandle />}
        backgroundComponent={() => <ModalBottom />}
        style={[!props.blurView && styles.container, { backgroundColor: !props.blurView && colors.cardBg }]}
      >
        <View style={[styles.container, props.containerStyle, { backgroundColor: colors.cardBg }]}>

          <View style={styles.titleContainer}>
            <CustomText
              title
              size={colors.titleSize}
              color={colors.cardTitle}
              style={styles.title}
              langText={props.titleText}
            />
          </View>

          <View style={[styles.modalContainer, props.childrenContainerStyle]}>

            { props.children }

            { props.flatList &&
            <BottomSheetFlatList
              showsVerticalScrollIndicator={ false }
              showsHorizontalScrollIndicator={ false }
              data={ props.data }
              renderItem={ props.renderItem }
              extraData={ props.extraData }
              keyExtractor={ (due: { id: any }) => due.id }
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

      </BottomSheet>
      </>
  )
}

MyModal.defaultProps = {
  toggle: false,
  titleText: "test.i18nTest",
  buttonText: "test.i18nTest",
  iconName: "x",
  buttonWidth: 150,
  height: 300
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
