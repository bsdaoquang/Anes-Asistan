import React, {useState} from 'react';
import { View, Text, Modal,
  ScrollView, StyleSheet,
  KeyboardAvoidingView,
  Alert, TouchableOpacity,
  Button, TextInput, FlatList
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

//import drugs data
import {DRUGS} from '../data/drugs';

function Item({ name }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default function HomeScreen({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState(weight)
  const [height, setHeight] = useState(height)

  const [showInfo, setShowInfo] = useState(true)
  const [showVentilation, setShowVentilation] = useState(true)

  const cancel = () => {
    setHeight()
    setWeight()
    setGender('male')

    setModalVisible(false)
  }

  //các hàm đóng mở phần thông tin
  //thông tin cơ bản
  const showBasicInfo = () => {
    setShowInfo(!showInfo)
  }

  const showVentilationInfo = () => {
    setShowVentilation(!showVentilation)
  }

  //Phần tính toán các giá trị
  var ibw // cân nặng lý tưởng
  var evb //lượng máu trung bình

  var heightM = height/100
  var heightInch = height*0.39370

  var bmi = (weight / Math.pow(heightM,2)).toFixed(1)

  //ibw
  gender === 'male' ?
    ibw = (50 + 2.3 * (heightInch - 60)).toFixed(1)
  :
    ibw = (45.5 + 2.3 * (heightInch - 60)).toFixed(1)

  //Tính lượng máu trung bình

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
            <FontAwesome5 name={gender} size={72} color="#00bfa5" />
            {
              weight != null ?
              <Text style={styles.genderTitle}>{gender === 'male'? "Nam": "Nữ"}: {weight} kg, {height} cm</Text>
              :
              <Text style={{...styles.genderTitle, fontStyle: 'italic', fontSize: 14}}>Nhấp để nhập thông tin</Text>
            }
          </View>
        </TouchableOpacity>

        <View style={styles.basicInfoContain}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.genderTitle, fontWeight: 'bold'}} onPress={showBasicInfo}>Thông số cơ bản</Text>
            <FontAwesome5 name={showInfo === false ? 'angle-down' : 'angle-up'} size={28} color="#424242" style={{...styles.genderTitle, textAlign: 'right', flex: 1, marginHorizontal: 10}}/>
          </View>
            {showInfo === true ?
            <View>
              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Chỉ số khối cơ thể (BMI): </Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>{bmi}</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Cân nặng lý tưởng (IBW):</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>{ibw} Kg</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Lượng máu trung bình (EBV):</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>{gender === 'male'? 70*weight : 65*weight} - {gender === 'male'? 75*weight : 70*weight} mL</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Mạch:</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>60 - 90 nhịp/phút</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Huyết áp:</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>90 - 120 / 60 - 90 mmHg</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Nhịp thở:</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>12 - 25 lần/phút</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Dịch cơ bản:</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>{weight*1 + 40} mL/giờ</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Thể tích khí lưu thông:</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>{weight*10} mL</Text>
              </View>

              <View style={styles.infoContain}>
                <Text style={styles.infoText}>Dung tích sống:</Text>
                <Text style={{...styles.infoText, textAlign: 'right'}}>{weight*65} - {weight * 75} mL</Text>
              </View>
            </View>
            : null }
        </View>

        <View style={styles.basicInfoContain}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.genderTitle, fontWeight: 'bold'}} onPress={showVentilationInfo}>Thông khí</Text>
            <FontAwesome5 name={showVentilation === false ? 'angle-down' : 'angle-up'} size={28} color="#424242" style={{...styles.genderTitle, textAlign: 'right', flex: 1, marginHorizontal: 10}}/>
          </View>
          {
            showVentilation === false ? null
            :
            <View>
            <View style={styles.infoContain}>
            <Text style={styles.infoText}>Vt:</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>{ibw * 8} - {ibw * 10} mL</Text>
            </View>

            <View style={styles.infoContain}>
            <Text style={styles.infoText}>Rate:</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>12 - 14 lần/phút</Text>
            </View>

            <View style={styles.infoContain}>
            <Text style={styles.infoText}>PEEP:</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>0-5 cm H2O</Text>
            </View>

            <View style={styles.infoContain}>
            <Text style={styles.infoText}>PIP:</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>25 - 35cmH20</Text>
            </View>

            <View style={styles.infoContain}>
            <Text style={styles.infoText}>I:E</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>1:2 - 1:3</Text>
            </View>
            </View>
          }
        </View>

        {/*This is drugs contain*/}
        <View style={styles.basicInfoContain}>
          <Text style={{...styles.genderTitle, fontWeight: 'bold'}}>Thuốc thường dùng</Text>
        </View>

        {/*this is list drugs contain*/}
          <FlatList
            data={DRUGS}
            renderItem={({ item }) => (
              <View style={styles.itemContain}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.titleList}>{item.name}</Text>
                  <FontAwesome5 name="external-link-alt" size={16} color="#424242" onPress={() => Alert.alert('Chuyển đến trang thuốc chi tiết')}/>
                </View>
                <Text style={{...styles.infoText, flex:1, textAlign: 'center', fontStyle: 'italic'}}>{item.brandName}</Text>
                <View style={{flexDirection: 'row', padding: 8}}>
                  <View style={{flex: 1}}>
                    <Text style={{...styles.infoText, textAlign: 'center', fontWeight: 'bold'}}>{item.doses[3]}: {item.doses[0]} - {item.doses[1]} {item.doses[2]}</Text>
                    <Text style={styles.infoText}>Trung bình: {item.typically} {item.doses[2]}</Text>
                  </View>

                  <View style={{flex: 1, borderColor: '#424242', borderStyle: 'solid', borderLeftWidth: 1}}>
                    <Text style={{...styles.infoText, textAlign: 'center'}}>{(item.doses[0] * weight).toFixed(1)} - {(item.doses[1] * weight).toFixed(1)} {item.doses[4]}</Text>
                    <Text style={{...styles.infoText, textAlign: 'center', fontWeight: 'bold'}}>{(item.typically * weight).toFixed(0)} {item.doses[4]}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.name}
          />
        {/*end list*/}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 8,
    marginTop: 25,
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
    color: '#424242',
    fontSize: 18,
    paddingVertical: 8
  },
  title:{
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#424242',
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
    borderColor: '#616161',
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
    color: '#616161',
    paddingVertical: 5
  },
  inputUnit:{
    fontSize: 16,
    flex: 2,
    color: '#616161',
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
    color: '#616161',
    padding: 10,
    borderColor: '#616161',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    fontSize: 16,
    marginRight: 5
  },

  //basic info contain
  basicInfoContain:{
    marginVertical: 5,
  },
  infoContain:{
    flexDirection: 'row',
    paddingVertical: 8,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingHorizontal: 5
  },
  infoText:{
    color: '#616161',
    fontSize: 14,
    flex: 1,
    textAlign: 'left'
  },

  //this is styles of list
  itemContain:{
    borderColor: '#424242',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginVertical: 5
  },
  titleList:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#424242',
    flex: 1,
    textAlign: 'center'
  }
})
