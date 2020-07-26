import React, {useState} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard} from 'react-native'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

export default function PulmonaryComplication(){

	const [age, setAge] = useState(0)
	const [preoperative, setPreoperative] = useState(0)
	const [respiratory, setRespiratory] = useState(0)
	const [anemia, setAnemia] = useState(0)
	const [incision, setIncision] = useState(0)
	const [duration, setDuration] = useState(0)
	const [emergency, setEmergency] = useState(0)

	var point = age + preoperative + respiratory + anemia + incision + duration + emergency
	var risk = 0

	if (point < 26) {
		risk = 1.6
	}else if (point > 26 && point < 45) {
		risk = 13.3
	}else{
		risk = 42.1
	}

	return(
	<View>
	    <ScrollView>
	    <KeyboardAvoidingView style={styles.container}>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerSubTitle}>Dự đoán nguy cơ các biến chứng phổi sau phẫu thuật</Text>
			        </View>
		        {/*End header*/}

				<View style={styles.formInfo}>
              		<Text style={styles.infoText}>Áp dụng cho những bệnh nhân được gây mê toàn thân, tê tủy sống và tê cục bộ</Text>
            	</View>

				{/*This is form container*/}
	          	<View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>Tuổi: </Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
						<TouchableOpacity
							style= {age == 0 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setAge(0)}>

							<Text style={age == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'≤50'}</Text>
							<Text style={styles.titleInputDesc}>+0</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style={age == 3 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setAge(3)}>

							<Text style={age == 3? styles.buttonTextSelect : styles.buttonTextNonSelect}>51-80</Text>
							<Text style={styles.titleInputDesc}>+3</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style={age == 16 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setAge(16)}>

							<Text style={age == 16? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'>80'}</Text>
							<Text style={styles.titleInputDesc}>+16</Text>

						</TouchableOpacity>

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
		                <Text style={styles.titleInputText}>SpO2 trước phẫu thuật</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
						<TouchableOpacity
							style= {preoperative == 0 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setPreoperative(0)}>

							<Text style={preoperative == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'≥96%'}</Text>
							<Text style={styles.titleInputDesc}>+0</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style={preoperative == 8 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setPreoperative(8)}>

							<Text style={preoperative == 8? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'91-95%'}</Text>
							<Text style={styles.titleInputDesc}>+8</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style={preoperative == 24 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setPreoperative(24)}>

							<Text style={preoperative == 24? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'≤90%'}</Text>
							<Text style={styles.titleInputDesc}>+24</Text>

						</TouchableOpacity>

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
		                <Text style={styles.titleInputText}>Nhiễm trùng hô hấp trong vòng 1 tháng</Text>
		                <Text style={styles.titleInputDesc}>Gồm cả đường hô hấp dưới và trên (vd:, URI, viêm mũi họng, phế quản), với sốt và điều trị kháng sinh</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
						<TouchableOpacity
							style= {respiratory == 17 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setRespiratory(17)}>

							<Text style={respiratory == 17? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
							<Text style={styles.titleInputDesc}>+17</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style={respiratory == 0 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setRespiratory(0)}>

							<Text style={respiratory == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
							<Text style={styles.titleInputDesc}>+0</Text>

						</TouchableOpacity>
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
		                <Text style={styles.titleInputText}>Thiếu máu</Text>
										<Text style={styles.titleInputDesc}>Trước phẫu thuật (Hgb ≤ 10 g/dL)</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
						<TouchableOpacity
							style= {anemia == 11 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setAnemia(11)}>

							<Text style={anemia == 11? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
							<Text style={styles.titleInputDesc}>+11</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style={anemia == 0 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setAnemia(0)}>

							<Text style={anemia == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
							<Text style={styles.titleInputDesc}>+0</Text>

						</TouchableOpacity>
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
		                <Text style={styles.titleInputText}>Vị trí phẫu thuật</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
						<TouchableOpacity
							style= {incision == 0 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setIncision(0)}>

							<Text style={incision == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Mạch máu ngoại biên</Text>
							<Text style={styles.titleInputDesc}>+0</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style= {incision == 15 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setIncision(15)}>

							<Text style={incision == 15? styles.buttonTextSelect : styles.buttonTextNonSelect}>Phẫu thuật bụng</Text>
							<Text style={styles.titleInputDesc}>+15</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style= {incision == 24 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setIncision(24)}>

							<Text style={incision == 24? styles.buttonTextSelect : styles.buttonTextNonSelect}>Phẫu thuật nội sọ</Text>
							<Text style={styles.titleInputDesc}>+24</Text>

						</TouchableOpacity>

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
		                <Text style={styles.titleInputText}>Thời gian phẫu thuật</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
						<TouchableOpacity
							style= {duration == 0 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setDuration(0)}>

							<Text style={duration == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'< 2 hrs'}</Text>
							<Text style={styles.titleInputDesc}>+0</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style= {duration == 16 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setduration(16)}>

							<Text style={duration == 16? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'2 - 3 hrs'}</Text>
							<Text style={styles.titleInputDesc}>+16</Text>

						</TouchableOpacity>

						<TouchableOpacity
							style= {duration == 23 ? styles.buttonSelect : styles.buttonNonSelect}
							onPress={() => setDuration(23)}>

							<Text style={duration == 23? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'> 3 hrs'}</Text>
							<Text style={styles.titleInputDesc}>+23</Text>

						</TouchableOpacity>

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
		                <Text style={styles.titleInputText}>Phẫu thuật cấp cứu</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
										<TouchableOpacity
											style= {emergency == 8 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setEmergency(8)}>

											<Text style={emergency == 8? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
											<Text style={styles.titleInputDesc}>+8</Text>

										</TouchableOpacity>

										<TouchableOpacity
											style={emergency == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setEmergency(0)}>

											<Text style={emergency == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
											<Text style={styles.titleInputDesc}>+0</Text>

										</TouchableOpacity>
						              </View>
						            </View>
						            {/*end input contain*/}
					          	</View>
					         	 {/*end from contain*/}

				         	{/*This is result contain*/}
					          <View style={styles.resultContain}>
					              <View style={styles.resultTitle}>
													<Text style={styles.resultTitleText}>Nguy cơ: </Text>
													<Text style={styles.result}>{risk} %</Text>
					           </View>
					           <Text style={styles.unit}>Nguy cơ biến chứng phổi sau phẫu thuật tại bệnh viện*</Text>
					          </View>
					          {/*End result contain*/}

					         <View style={styles.formInfo}>
					         	<Text style={styles.titleInfo}>Ghi chú:</Text>
			              		<Text style={styles.infoText}>*Những biến chứng này bao gồm suy hô hấp, nhiễm trùng, tràn dịch, tràn khí màng phổi, co thắt phế quản điều trị bằng thuốc và viêm phổi hít</Text>
			            	</View>

			            	<View style={styles.formInfo}>
			            		<Text style={styles.titleInfo}>Đánh giá:</Text>

			            		<View style={styles.formInfo2col}>
				            		<View style={styles.infoCol1}>
					            		<Text style={styles.infoText}>Thang điểm ARISCAT</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>Nhóm nguy cơ</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>Tỉ lệ</Text>
				            		</View>
				            	</View>

				            	<View style={styles.formInfo2col}>
				            		<View style={styles.infoCol1}>
					            		<Text style={styles.infoText}>{'<26'}</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>Thấp</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>1.6%</Text>
				            		</View>
				            	</View>

				            	<View style={styles.formInfo2col}>
				            		<View style={styles.infoCol1}>
					            		<Text style={styles.infoText}>26 - 44</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>Trung bình</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>13.3%</Text>
				            		</View>
				            	</View>

				            	<View style={styles.formInfo2col}>
				            		<View style={styles.infoCol1}>
					            		<Text style={styles.infoText}>{'≥45'}</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>Cao</Text>
				            		</View>

				            		<View style={styles.infoCol1}>
				            			<Text style={styles.infoText}>42.1%</Text>
				            		</View>
				            	</View>

			            	</View>

			            	<View style={styles.formInfo}>
			            		<Text style={styles.infoText}>Tác giả: Dr. Jaume Canet</Text>
							</View>

				      	</View>
				      </TouchableWithoutFeedback>
				    </KeyboardAvoidingView>

				    </ScrollView>
						<View>
							<AdMob />
						</View>
	</View>
	)
}
