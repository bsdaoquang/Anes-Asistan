import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function DrugWebView() {
    return (
      <WebView
        source={{ uri: 'https://www.drugs.com/propofol.html' }}
        style={{ marginTop: 20 }}
      />
    );
}
