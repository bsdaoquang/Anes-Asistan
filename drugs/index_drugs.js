import React from "react";
import { Text, View, SafeAreaView, SectionList, StyleSheet, Linking, TouchableOpacity } from "react-native";
import AdMob, {showAdInter} from '../components/AdMob'

import {DrugsList} from '../data/drugs'

const Item = ({ title }) => (
  <View style={styles.listItem}>
    <Text style={styles.items}>{title}</Text>
  </View>
);

export default function DrugsHome({ navigation }){

  function goToDrugWeb(item){
    //showAdInter()
    navigation.navigate('Thuốc gây mê', {nameDrug: item})
  }

  return(
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inner}>
          <SectionList
            sections={DrugsList}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => goToDrugWeb(item)}>
                <Item title={item} />
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.titleList}>{title}</Text>
            )}
          />
        </View>
      </SafeAreaView>
      {/*Admob form*/}
      <View style={{top: 0, position: 'absolute', marginTop: 30}}>
        <AdMob />
      </View>
      {/*end admob*/}
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1
  },
  inner:{
    marginTop: 90,
    //padding: 10
  },
  titleList:{
    flex: 1,
    backgroundColor: '#e0e0e0',
    color: '#424242',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
  },
  listItem:{
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'solid',
    paddingVertical: 8,
    marginHorizontal: 10
  },
  items:{
    color: '#424242',
    fontSize: 14
  }
})
