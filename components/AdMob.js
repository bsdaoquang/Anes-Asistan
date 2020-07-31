import React from 'react'
import {View, Text} from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'expo-ads-admob'

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


export const showAdInter = async() => {
//await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/9068964448'); //Quảng cáo thật
await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
await AdMobInterstitial.showAdAsync();
}
