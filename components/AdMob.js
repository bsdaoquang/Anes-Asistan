import React from 'react'
import {View, Text} from 'react-native';
import {AdMobBanner} from 'expo-ads-admob'

import {styles} from './styles'

export default function AdMob(){
  return(
    <View>
      <AdMobBanner
        style={styles.bottomBanner}
        bannerSize = "fullBanner"
        adUnitID = "ca-app-pub-6209888091137615/4493908153"
        serverPersonallizedAds = {false}
      />
    </View>
  )
}
