import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { AddNewItem1, AddNewItem2 } from '../components'

const Stack = createNativeStackNavigator()

export default function AddNewItemNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AddNewItem1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddNewItem1" component={AddNewItem1} />
      <Stack.Screen name="AddNewItem2" component={AddNewItem2} />
      <Stack.Screen name="AddNewItem3" component={AddNewItem1} />
      <Stack.Screen name="AddNewItem4" component={AddNewItem1} />
    </Stack.Navigator>
  )
}
