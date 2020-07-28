import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export default function Documents(){
  return(
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>This is Documents page</Text>
      </View>
    </View>
  )
}
