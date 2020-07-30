import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, RefreshControl
} from 'react-native'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

export default function TinhLuongMauMat(){
	const [weight, setWeight] = useState(weight)
  const [hct0, setHct0] = useState(hct0)
  const [hctf, setHctf] = useState(hctf)
  const [age, setAge] = useState(0)

  var ebv, hctAV, abl

  ebv = weight*age
  hctAV = (hct0*1 + hctf*1)/2
  abl = ((ebv*(hct0 - hctf))/hctAV).toFixed(1)
	return(
		<View style={styles.container}>
			<ScrollView>
				<KeyboardAvoidingView>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							{/*This is header*/}
							<View style={styles.headerContain}>
								<Text style={styles.headerSubTitle}>Tính lượng máu mất trong tối đa cho phép (ABL)</Text>
							</View>
							{/*End header*/}
							<View style={styles.formImportant}>
								<Text style={{...styles.titleInfo, color: '#fafafa', fontSize: 18, fontWeight: 'bold'}}>LƯU Ý</Text>
								<Text style={styles.importantText}>Phương pháp này chỉ là ước tính để đo lượng máu mất. Các dấu hiệu lâm sàng nên được đánh giá trước</Text>
                <Text style={styles.importantText}>Công thức này có thể đánh giá lượng máu mất quá cao nếu không được bù dịch đầy đủ khi mất máu cấp</Text>
							</View>

							{/*This is form container*/}
		          <View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>Cân nặng</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {weight => setWeight(weight)}
		                  clearTextOnFocus
		                />
                    {
                      weight < 0 || weight > 200 ?
                        <Text style={styles.errorAlert}>Không hợp lệ!</Text>
                      : null
                    }
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>Kg</Text>
		              </View>
		            </View>
		            {/*end input contain*/}
		          </View>
		          {/*end from contain*/}

              {/*This is form container*/}
		          <View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>HCT ban đầu</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '120 - 170'
		                  keyboardType = 'number-pad'
		                  onChangeText = {hct0 => setHct0(hct0)}
		                  clearTextOnFocus
		                />
                    {
                      hct0 < 0 ?
                        <Text style={styles.errorAlert}>Không hợp lệ</Text>
                      : null
                    }
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>g/L</Text>
		              </View>
		            </View>
		            {/*end input contain*/}
		          </View>
		          {/*end from contain*/}

              {/*This is form container*/}
		          <View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>HCT cuối cùng</Text>
                    <Text style={styles.titleInputDesc}>HCT thấp nhất chấp nhận được theo đánh giá lâm sàng</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '120 - 170'
		                  keyboardType = 'number-pad'
		                  onChangeText = {hctf => setHctf(hctf)}
		                  clearTextOnFocus
		                />
                    {
                      hctf < 0 ?
                        <Text style={styles.errorAlert}>Không hợp lệ</Text>
                      : null
                    }
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>g/L</Text>
		              </View>
		            </View>
		            {/*end input contain*/}
		          </View>
		          {/*end from contain*/}

							{/*This is form container*/}
							 <View style={styles.formContain}>
								 {/*This is input contain*/}
								 <View style={styles.inputContain}>
									 <View style={styles.titleInput}>
										 <Text style={styles.titleInputText}>Tuổi</Text>
									 </View>

									 <View style={styles.buttonContainVertical}>
                       <TouchableOpacity
                         style= {age == 96 ? styles.buttonSelect : styles.buttonNonSelect}
                         onPress={() => setAge(96)}>
                         <Text style={age == 96? styles.buttonTextSelect : styles.buttonTextNonSelect}>Trẻ sơ sinh non tháng</Text>
                       </TouchableOpacity>

                       <TouchableOpacity
                         style= {age == 85 ? styles.buttonSelect : styles.buttonNonSelect}
                         onPress={() => setAge(85)}>
                         <Text style={age == 85? styles.buttonTextSelect : styles.buttonTextNonSelect}>Trẻ sơ sinh</Text>
                       </TouchableOpacity>

                       <TouchableOpacity
                         style= {age == 80 ? styles.buttonSelect : styles.buttonNonSelect}
                         onPress={() => setAge(80)}>
                         <Text style={age == 80? styles.buttonTextSelect : styles.buttonTextNonSelect}>Trẻ em</Text>
                       </TouchableOpacity>

											 <TouchableOpacity
												 style= {age == 75 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setAge(75)}>
												 <Text style={age == 75? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nam trưởng thành</Text>
											 </TouchableOpacity>

											 <TouchableOpacity
												 style={age == 65 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setAge(65)}>
												 <Text style={age == 65? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nữ trưởng thành</Text>
											 </TouchableOpacity>
									 </View>
								 </View>
								 {/*end input contain*/}
							 </View>
							{/*end from contain*/}

							{/*this is result, show in result != 0*/}
							<View style={styles.resultContain}>
								{
									1 > 0 ?
										<View>
											<View style={styles.resultContent}>
												<Text style={styles.resultTitleText}>Lượng máu trung bình: </Text>
												<Text style={styles.result}>{ebv}</Text>
												<Text style={styles.resultTitleText}>mL</Text>
											</View>

											<View style={styles.resultContent}>
												<Text style={styles.resultTitleText}>Máu mất cho phép: </Text>
												<Text style={styles.result}>{abl}</Text>
												<Text style={styles.resultTitleText}>mL</Text>
											</View>
										</View>

									: <Text style={styles.unit}>Nhập đầy đủ thông tin để tính</Text>
								}
							</View>
							{/*end result*/}

              <View style={{...styles.formImportant, backgroundColor: '#e0e0e0'}}>
								<Text style={{...styles.titleInfo, color: '#424242', fontSize: 18, fontWeight: 'bold'}}>LƯU Ý</Text>
								<Text style={{...styles.importantText, color: '#424242'}}>Cân nhắc truyền máu nếu lượng máu mất vượt quá lượng máu mất tối đa cho phép</Text>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</ScrollView>
			<View style={styles.bottomBanner}>
				<AdMob />
			</View>
		</View>
	)
}
