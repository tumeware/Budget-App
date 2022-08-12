import React from 'react'
import { View, StyleSheet, Platform, Dimensions } from 'react-native'

import { AddNewItemsDateTime } from './AddNewItemsDateTime'

export function AddNewItem3 (props: any) {

  return (
    <View style={[styles.itemsContainer, props.containerStyle]}>
      <AddNewItemsDateTime />
    </View>
  )
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 1.5,
  },
})
