import React, {useState} from 'react';
import { View, Text, Modal,
  ScrollView, StyleSheet,
  KeyboardAvoidingView,
  Alert, TouchableOpacity,
  Button, TextInput
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen(){
  const [modalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState(weight)
  const [height, setHeight] = useState(height)


  const cancel = () => {
    setHeight()
    setWeight()
    setGender('male')

    setModalVisible(false)
  }
  //Phần tính toán các giá trị
  var heightM = height/100
  var heightInch = height*0.39370

  var bmi = (weight / Math.pow(heightM,2)).toFixed(1)
  //hết phần tính toán

  return(
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        {/*This is the Modal*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          >
          <View style={styles.modalContainer}>
            <View style={styles.selectGenderContainer}>
              <TouchableOpacity style={styles.selectGender} onPress={() => setGender('male')}>
                <FontAwesome5 name="male" size={64} color={gender === 'male' ? "#00bfa5" : '#bdbdbd'}/>
                <Text style={styles.genderTitle}>Nam</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectGender} onPress={() => setGender('female')}>
                <FontAwesome5 name="female" size={64} color={gender === 'female' ? "#00bfa5" : '#bdbdbd'}/>
                <Text style={styles.genderTitle}>Nữ</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectGender} onPress={() => setGender('child')}>
                <FontAwesome5 name="child" size={42} color={gender === 'child' ? "#00bfa5" : '#bdbdbd'} style={{marginTop: 22}}/>
                <Text style={styles.genderTitle}>Trẻ em</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingVertical: 8, justifyContent: 'center'}}>
              <View style={styles.selectGenderContainer}>
                <Text style={styles.inputTitle}>Cân nặng : </Text>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {weight => setWeight(weight)}
                />
                <Text style={styles.inputUnit}>Kg</Text>
              </View>

              <View style={styles.selectGenderContainer}>
                <Text style={styles.inputTitle}>Chiều cao: </Text>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {height => setHeight(height)}
                />
                <Text style={styles.inputUnit}>Cm</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', margin: 5}}>
              <TouchableOpacity style={{flex: 1}} onPress= {cancel}>
                <Text style={styles.btnHuy}>HỦY</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex: 1}} onPress= {() => setModalVisible(!modalVisible)}>
                <Text style={styles.btnDongY}>ĐỒNG Ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/*end Modal*/}

        <TouchableOpacity onPress = {() => setModalVisible(true)}>
          <View style={styles.headerContain}>
            <Text style={styles.title}>Thông tin bệnh nhân</Text>
            <FontAwesome5 name={gender} size={gender === 'child' ? 42 : 72} color="#00bfa5" />
            {
              weight != null ?
              <Text style={styles.genderTitle}>{gender}: {weight} kg, {height} cm</Text>
              :
              <Text style={{...styles.genderTitle, fontStyle: 'italic', fontSize: 14}}>Nhấp để nhập thông tin</Text>
            }
          </View>
        </TouchableOpacity>

        <View style={styles.basicInfoContain}>
          <View style={styles.infoContain}>
            <Text style={styles.infoText}>BMI</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>{bmi}</Text>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 8,
    marginTop: 70,
    backgroundColor: '#fafafa',
    justifyContent: 'center'
  },
  headerContain:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'solid'
  },
  genderTitle:{
    fontWeight: '400',
    color: '#707070',
    fontSize: 18,
    paddingVertical: 8
  },
  title:{
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#707070',
    paddingBottom: 15
  },

  //This is modal styles
  modalContainer:{
    backgroundColor: '#eeeeee',
    marginVertical: 50,
    justifyContent: 'center',
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  selectGenderContainer:{
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  selectGender:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginHorizontal: 5,
    borderColor: '#707070',
    borderBottomWidth: 1,
    textAlign: 'right',
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
    flex: 4,
  },
  inputTitle:{
    fontSize: 16,
    flex: 3,
    color: '#707070',
    paddingVertical: 5
  },
  inputUnit:{
    fontSize: 16,
    flex: 2,
    color: '#707070',
    textAlign: 'center'
  },
  btnDongY:{
    textAlign: 'center',
    backgroundColor: '#00bfa5',
    color: '#fafafa',
    fontWeight: 'bold',
    padding: 10,
    borderColor: '#00bfa5',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    fontSize: 16
  },
  btnHuy:{
    textAlign: 'center',
    color: '#707070',
    padding: 10,
    borderColor: '#707070',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    fontSize: 16,
    marginRight: 5
  },

  //basic info contain
  basicInfoContain:{
    marginVertical: 8
  },
  infoContain:{
    flexDirection: 'row',
    paddingVertical: 5,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingHorizontal: 5
  },
  infoText:{
    color: '#707070',
    fontSize: 14,
    flex: 1,
    textAlign: 'left'
  }
})
