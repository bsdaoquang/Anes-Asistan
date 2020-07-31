import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function DrugWebView ({route}) {
  const {nameDrug} = route.params
  var uri = 'https://www.drugs.com/'+nameDrug+'.html'

    return (
      <WebView
        source={{ uri: uri }}
        style={{ marginTop: 20 }}
      />
    );
}
