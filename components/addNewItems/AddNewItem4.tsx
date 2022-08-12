import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import { AddNewItemsImage } from './AddNewItemsImage'

export function AddNewItem4 (props) {

  return (
    <View style={[styles.itemsContainer, props.containerStyle]}>
      <AddNewItemsImage />
    </View>
  )
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 1.5,
  },
})
