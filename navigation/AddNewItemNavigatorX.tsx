import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import AddNewItemScreen1 from '../screens/addNewItemScreen/AddNewItemScreen1'
import AddNewItemScreen2 from '../screens/addNewItemScreen/AddNewItemScreen2'
import AddNewItemScreen3 from '../screens/addNewItemScreen/AddNewItemScreen3'
import AddNewItemScreen4 from '../screens/addNewItemScreen/AddNewItemScreen4'
const Stack = createNativeStackNavigator()

export default function AddNewItemNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="AddNewItem1" component={AddNewItemScreen1} />
      <Stack.Screen name="AddNewItem2" component={AddNewItemScreen2} />
      <Stack.Screen name="AddNewItem3" component={AddNewItemScreen3} />
      <Stack.Screen name="AddNewItem4" component={AddNewItemScreen4} />
    </Stack.Navigator>
  )
}
