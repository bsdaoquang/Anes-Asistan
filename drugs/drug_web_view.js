import * as React from 'react';
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview';

export default function DrugWebView ({route}) {
  const {nameDrug} = route.params
  var uri = 'https://www.drugs.com/dosage/'+nameDrug+'.html'
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa', paddingVertical: 15}}>
        <WebView
          source={{ uri: uri }}
        />
      </View>
    );
}
