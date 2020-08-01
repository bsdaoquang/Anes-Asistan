import * as React from 'react';
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview';
import AdMob from '../components/AdMob'

export default function DrugWebView ({route}) {
  const {nameDrug} = route.params
  var uri = 'https://www.drugs.com/dosage/'+nameDrug+'.html'
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <WebView
          source={{ uri: uri }}
        />
        <View>
          <AdMob />
        </View>
      </View>
    );
}
