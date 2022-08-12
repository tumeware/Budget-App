import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import * as FacebookAds from 'expo-ads-facebook'

const { AdTriggerView, AdMediaView } = FacebookAds
const placementId = 'your ad units' // ?
const numberOfAdsToRequest = 10 // ?

FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash) // fake ads

export const facebookAdsManager = new FacebookAds.NativeAdsManager(placementId, numberOfAdsToRequest)

function FacebookAdComponent (props) {
  const darkMode = useSelector(state => state.darkMode.darkMode)
  return (
    <View>
      <AdMediaView />
      <AdTriggerView>
        <Text>{props.nativeAd.bodyText}</Text>
      </AdTriggerView>
    </View>
  )
}

export FacebookAds.withNativeAd(FacebookAdComponent)
