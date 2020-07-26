import React from 'react'
import {View, Text} from 'react-native';
import {AdMobBanner} from 'expo-ads-admob'

import {styles} from './styles'

export default function AdMob(){
  return(
    <View>
      <AdMobBanner
        bannerSize = "fullBanner"
<<<<<<< HEAD
        //adUnitID = "ca-app-pub-6209888091137615/4493908153"
        adUnitID = "ca-app-pub-3940256099942544/6300978111"
        serverPersonallizedAds = {false}
=======
        //adUnitID = "ca-app-pub-6209888091137615/4493908153" //Quảng cáo thật
        adUnitID = "ca-app-pub-3940256099942544/6300978111" //Quảng cáo thử nghiệm
        serverPersonallizedAds = {true}
        onDidFailToReceiveAdwithError = {(e) => bannerError(e)}
>>>>>>> 2ae6f626d46c711e3082db6952da8797dacdb62e
      />
    </View>
  )
}
