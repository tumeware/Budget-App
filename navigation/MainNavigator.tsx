import * as React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { HomeScreen, AddNewItemScreen, LoaderScreen, ItemScreen, ConfigScreen } from '../screens'

enableScreens()
const Stack = createNativeStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Loader"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Loader" component={LoaderScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Config" component={ConfigScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen name="AddNewItem" component={AddNewItemScreen} />
    </Stack.Navigator>
  )
}
