import React from 'react'
import {View, Text} from 'react-native';
import {AdMobBanner} from 'expo-ads-admob'
export default function AdMob(){
  return(
    <View>
      <AdMobBanner
        bannerSize = "fullBanner"
        //adUnitID = "ca-app-pub-6209888091137615/4493908153" //Quảng cáo thật
        adUnitID = "ca-app-pub-3940256099942544/6300978111" //Quảng cáo thử nghiệm
        serverPersonallizedAds = {true}
        onDidFailToReceiveAdwithError = {(e) => bannerError(e)}
      />
    </View>
  )
}
