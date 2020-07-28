import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

const formulas = [
  {id: '2',title: 'Phân loại ASA', desc: 'Đánh giá tình trạng sức khỏe bệnh nhân trước phẫu thuật'},
  {id: '3',title: 'Chỉ số El-Ganzouri (EGRI)', desc: 'Đánh giá nguy cơ đặt nội khí quản khó'},
  {id: '1',title: 'Nguy cơ buồn nôn và nôn', desc: 'Đánh giá nguy cơ nôn và buồn nôn sau phẫu thuật (PONV)'},
  {id: '4',title: 'Truyền dịch trong phẫu thuật', desc: 'Tính lượng dịch cần truyền trong phẫu thuật'},
  {id: '5',title: 'Nguy cơ viêm phổi', desc: 'Dự đoán nguy cơ viêm phổi sau phẫu thuật'},
  {id: '6',title: 'Nguy cơ biến chứng phổi', desc: 'Dự đoán nguy cơ biến chứng phổi bao gồm cả suy hô hấp'},
  {id: '7',title: 'Nguy cơ suy hô hấp', desc: 'Nguy cơ thở máy trong 48 giờ hoặc đặt lại nội khí quản trong 30 ngày'},
  {id: '8',title: 'Tính lượng máu mất', desc: 'Tính lượng máu mất dựa vào chỉ số HCT'},
  {id: '9',title: 'Tính lượng thuốc mê hô hấp sử dụng', desc: 'Thể tích thuốc mê hô hấp sử dụng mL'},
]

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>title</Text>
    </View>
  );
}


export default function SceensNavigation({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={formulas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                style={styles.listContainer}>

                <View style={styles.listContent}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.infoText}>{item.desc}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        {/*end list*/}

      </View>

      {/*Admob form*/}
      <View style={styles.bottomBanner}>
        <AdMob />
      </View>
      {/*end admob*/}

    </View>
  );
}
