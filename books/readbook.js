import * as React from 'react';
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview';
import AdMob from '../components/AdMob'

export default function ReadBook ({route}) {
  const {idBook} = route.params
  var uri = 'https://drive.google.com/open?id='+idBook
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <WebView
          source={{ uri: uri }}
          style={{marginTop: 30}}
        />
        <View>
          <AdMob />
        </View>
      </View>
    );
}
