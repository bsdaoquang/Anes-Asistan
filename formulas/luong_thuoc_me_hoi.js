import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, RefreshControl
} from 'react-native'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

export default function TinhLuongMeHoi(){

	const [percen, setPercen] = useState(percen)
	const [oxy, setOxy] = useState(oxy)

	var volume = (percen * oxy * 3).toFixed(1)

	return(
		<View style={styles.container}>
			<ScrollView>
				<KeyboardAvoidingView>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							{/*This is header*/}
							<View style={styles.headerContain}>
								<Text style={styles.headerSubTitle}>Tính lượng thuốc mê hơi sử dụng</Text>
							</View>
							{/*End header*/}

							{/*This is form container*/}
		          <View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>% cài đặt</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {percen => setPercen(percen)}
		                  clearTextOnFocus
		                />
                    {
                      percen < 0 || percen > 200 ?
                        <Text style={styles.errorAlert}>Không hợp lệ!</Text>
                      : null
                    }
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>%</Text>
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
		                <Text style={styles.titleInputText}>Lưu lượng Oxy</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {oxy => setOxy(oxy)}
		                  clearTextOnFocus
		                />
                    {
                      oxy < 0 || oxy > 200 ?
                        <Text style={styles.errorAlert}>Không hợp lệ!</Text>
                      : null
                    }
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>L/phút</Text>
		              </View>
		            </View>
		            {/*end input contain*/}
		          </View>
		          {/*end from contain*/}

							{/*this is result, show in result != 0*/}
							<View style={styles.resultContain}>
								{
									volume > 0 ?
										<View>
											<View style={styles.resultContent}>
												<Text style={styles.resultTitleText}>Lượng thuốc mê: </Text>
												<Text style={styles.result}>{volume}</Text>
												<Text style={styles.resultTitleText}>mL/giờ</Text>
											</View>
										</View>
									: <Text style={styles.unit}>Nhập đầy đủ thông tin để tính</Text>
								}
							</View>
							{/*end result*/}
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
