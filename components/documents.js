import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export default function Documents(){
  return(
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={require('../images/update-doctor.jpg')} resizeMode='stretch' style={{width: '100%', height: 200}}/>
        <Text style={{margin: 15, color: '#424242', fontsize: 18}}>Xin lỗi bạn! Phần này đang được cập nhật, bạn vui lòng quay lại sau</Text>
      </View>
    </View>
  )
}
