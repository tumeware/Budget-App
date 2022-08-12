import * as React from 'react'
import { Platform } from 'react-native'
import Constants from 'expo-constants'
import { AdMobBanner, AdMobInterstitial, AdMobRewarded, setTestDeviceIDAsync } from 'expo-ads-admob'

// Set global test device ID
setTestDeviceIDAsync('aeed520f-e86f-4030-9b94-ee267f135ad8')

export function AdBanner () {
  //REAL
  const realAdUnitID = Platform.select({
    ios: 'ca-app-pub-8545571077756392/3402393779',
    android: 'ca-app-pub-8545571077756392/1798695736',
  })
  //DEMO
  const testAdUnitID = Platform.select({
    ios: 'ca-app-pub-3940256099942544/2934735716',
    android: 'ca-app-pub-3940256099942544/6300978111',
  })

  const adUnitID = Constants.isDevice && !__DEV__ ? realAdUnitID : testAdUnitID

  return (
    <AdMobBanner
      bannerSize="banner"
      adUnitID={adUnitID}
      servePersonalizedAds
      onDidFailToReceiveAdWithError={error => console.log(error)
      }
    />
  )
}

export async function AdInterstitial () {
  //REAL
  const realAdUnitID = Platform.select({
    ios: 'ca-app-pub-8545571077756392/1643312325',
    android: 'ca-app-pub-8545571077756392/9416832894',
  })
  //DEMO
  const testAdUnitID = Platform.select({
    ios: 'ca-app-pub-3940256099942544/4411468910',
    android: 'ca-app-pub-3940256099942544/1033173712',
  })

  const adUnitID = Constants.isDevice && !__DEV__ ? realAdUnitID : testAdUnitID

  await AdMobInterstitial.setAdUnitID(adUnitID)
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
  await AdMobInterstitial.showAdAsync().catch(e => console.log(e))
}

export async function AdRevarded () {
  //REAL
  const realAdUnitID = Platform.select({
    ios: 'ca-app-pub-8545571077756392/6107419521',
    android: 'ca-app-pub-8545571077756392/7803644575',
  })
  //DEMO
  const testAdUnitID = Platform.select({
    ios: 'ca-app-pub-8545571077756392/2062865752',
    android: 'ca-app-pub-8545571077756392/5239693430',
  })

  const adUnitID = Constants.isDevice && !__DEV__ ? realAdUnitID : testAdUnitID

  await AdMobRewarded.setAdUnitID(adUnitID)
  await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true })
  await AdMobRewarded.showAdAsync().catch(e => console.log(e))
}
