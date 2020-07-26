import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

import {t} from '../locales/index'

const formulas = [
  {id: '1',title: t('nausea_voimiting'), desc: t('nausea_voimiting_desc')},
  {id: '2',title: 'Phân loại ASA', desc: 'Đánh giá tình trạng sức khỏe bệnh nhân trước phẫu thuật'},
  {id: '3',title: 'Chỉ số El-Ganzouri (EGRI)', desc: 'Đánh giá nguy cơ đặt nội khí quản khó'},
  {id: '4',title: 'Truyền dịch trong phẫu thuật', desc: 'Tính lượng dịch cần truyền trong phẫu thuật'},
  {id: '5',title: t('pneumonia_risk_title'), desc: t('pneumonia_risk_desc')},
  {id: '6',title: t('pulmonary_complication'), desc: t('pulmonary_complication_desc')},
  {id: '7',title: t('prespiratory_risk'), desc: t('prespiratory_risk_desc')},
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
