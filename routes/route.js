import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'


import {t} from '../locales/index'

const DATA = [
  {id: '1',title: t('nausea_voimiting'), desc: t('nausea_voimiting_desc')},
  {id: '2',title: t('asa_physical'), desc: t('asa_title_desc')},
  {id: '3',title: t('difficult_airway_title'), desc: t('difficult_airway_desc')},
  {id: '4',title: t('intraoperative_fluid_dosing'), desc: t('dose_iv_fluids_intraoperative')},
  {id: '5',title: t('pneumonia_risk_title'), desc: t('pneumonia_risk_desc')},
  {id: '6',title: t('pulmonary_complication'), desc: t('pulmonary_complication_desc')},
  {id: '7',title: t('prespiratory_risk'), desc: t('prespiratory_risk_desc')},
];

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>t({title})</Text>
    </View>
  );
}


export default function SceensNavigation({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                style={styles.listContainer}>

                <View style={styles.listContent}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.infoText}>{item.desc}</Text>
                </View>

                <FontAwesome name="angle-double-right" size={24} color="#00bfa5" style={styles.iconRight}/>

              </TouchableOpacity>
            )}
            descending
            keyExtractor={item => item.id}
          />
        {/*end list*/}
      </View>
      {/*Admob form*/}
      <View>
        <AdMob />
      </View>
      {/*end admob*/}

    </View>
  );
}
