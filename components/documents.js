import React from 'react';
import {View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import {fireBase} from '../components/firebaseConfig';
import AdMob, {showAdInter} from './AdMob'
import { Ionicons } from '@expo/vector-icons';

const ebooks = []

fireBase.database().ref().child('ebook').child('anesthesia').on('value', (snapshot) => {
  snapshot.forEach(item => {
    ebooks.push(item.val())
  })
});

function Item({ title }) {
  return (
    <View>
      <Text>{ebooks[title]}</Text>
    </View>
  );
}

console.log(ebooks)
export default function Documents({ navigation }){

  function gotoReadbook(id){
    showAdInter()
    navigation.navigate('Tài liệu', {idBook: id})
  }
  return(
    <View style={styles.container}>
      <View>
        <AdMob />
      </View>
      <View style={{flexDirection: 'row', backgroundColor: '#4db6ac'}}>
        <TextInput
          style={styles.inputSreach}
          placeholder='tìm kiếm...'
        />
      </View>
      <View style={styles.inner}>
      {/*this is formulars list*/}
        <FlatList
          data={ebooks}
          renderItem={({ item }) => (
                <TouchableOpacity
                  style={{flexDirection: 'row', paddingVertical: 8, Flex: 1}}
                  onPress={() => gotoReadbook(item.idbook)}>
                    {/*phần này sẽ hiển thị ebook*/}
                    <Image source={{uri: item.urlImage}} resizeMethod='auto' style={styles.imageBooks}/>
                    <View style={styles.contentBooks}>
                      <Text style={{...styles.descBook, fontWeight: 'bold', fontSize: 16, color: '#424242'}}>{item.title}</Text>
                      <Text style={styles.descBook}>{item.desc}</Text>
                    </View>
                </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
        />
      {/*end list*/}
      <Text>Cập nhật mỗi ngày</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 30
  },
  inner:{
    padding: 10
  },
  inputSreach:{
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fafafa',
    borderRadius: 5,
    flex: 1,
    margin: 8,
    paddingHorizontal: 10,
    textAlign: 'left',
    color: '#424242',
    backgroundColor: '#fafafa'
  },
  imageBooks:{
    flex: 3,
    minHeight: 120,
    maxHeight: 150
  },
  contentBooks:{
    paddingHorizontal: 8,
    flex: 7,
    minHeight: 120,
    maxHeight: 150
  },
  descBook:{
    fontSize: 14,
    color: '#424242'
  },
  btnDownload:{
    paddingHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'coral',
    borderRadius: 4,
    flexDirection: 'row'
  },
  btnText:{
    color: '#fafafa',
    fontSize: 14,
    fontWeight: '300',
    marginVertical: 5
  },
  icons:{
    marginTop: 5,
    marginHorizontal: 5
  }
})
