import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RootSiblingParent } from 'react-native-root-siblings'
import * as ScreenOrientation from 'expo-screen-orientation'
import { Host } from 'react-native-portalize'

import 'react-native-gesture-handler'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { Store, Persistor } from './store/store'
import Navigation from './navigation'
import "./i18n"
import { MyStatusBar } from './components'

async function ChangeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}
ChangeScreenOrientation()

export default function App(props: any) {

  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <SafeAreaProvider>
            <RootSiblingParent>
              <Host>
                <Navigation colorScheme={colorScheme} />
                <MyStatusBar />
              </Host>
            </RootSiblingParent>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}
