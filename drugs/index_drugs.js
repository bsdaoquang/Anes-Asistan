import React from 'react';
import {View, Text, SectionList } from 'react-native';
import {styles} from '../components/styles'

//import list of drugs
import {DrugsList} from '../data/drugs'

export default function DrugsHome(){
  return(
    <View style={styles.container}>
      <Text>This is list drugs</Text>
    </View>
  )
}
