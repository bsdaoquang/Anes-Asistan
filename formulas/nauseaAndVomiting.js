import React, {useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

export default function NauseaVomiting(){

	const [gender, setGender] = useState(0)
	const [smoke, setSmoke] = useState(0)
	const [history, setHistory] = useState(0)
	const [opioid, setOpioid] = useState(0)

	var point = gender + smoke + history + opioid
	var risk = 0

	switch(point) {
	  case 0:
	    risk = 10
	    break;
	  case 1:
	    risk = 21
	    break;
	  case 2:
	    risk = 39
	    break;
	  case 3:
	    risk = 61
	    break;
	  case 4:
	    risk = 79
	    break;
	  default:
	    risk = 0
	}

	return(
	<View style={styles.container}>
	    <ScrollView>
	    <KeyboardAvoidingView>
	      <TouchableWithoutFeedback>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerSubTitle}>Đánh giá nguy cơ buồn nôn và nôn sau phẫu thuật</Text>
			        </View>
		        {/*End header*/}

				<View style={styles.formInfo}>
              		<Text style={styles.infoText}>Sử dụng trong những trường hợp gây mê toàn thân</Text>
            	</View>

				{/*This is form container*/}
	          	<View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>Giới tính</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
										<TouchableOpacity
											style= {gender == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setGender(0)}>

											<Text style={gender == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nam</Text>
											<Text style={styles.titleInputDesc}>+0</Text>

										</TouchableOpacity>

										<TouchableOpacity
											style={gender == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setGender(1)}>

											<Text style={gender == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nữ</Text>
											<Text style={styles.titleInputDesc}>+1</Text>

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
		                <Text style={styles.titleInputText}>Hút thuốc lá</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
										<TouchableOpacity
											style= {smoke == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setSmoke(0)}>

											<Text style={smoke == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
											<Text style={styles.titleInputDesc}>+0</Text>

										</TouchableOpacity>

										<TouchableOpacity
											style={smoke == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setSmoke(1)}>

											<Text style={smoke == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
											<Text style={styles.titleInputDesc}>+1</Text>

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
		                <Text style={styles.titleInputText}>Tiền sử say tàu xe hoặc PONV</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
										<TouchableOpacity
											style= {history == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setHistory(1)}>

											<Text style={history == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
											<Text style={styles.titleInputDesc}>+1</Text>

										</TouchableOpacity>

										<TouchableOpacity
											style={history == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setHistory(0)}>

											<Text style={history == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
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
		                <Text style={styles.titleInputText}>Sử dụng Opioid sau mổ</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
										<TouchableOpacity
											style= {opioid == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setOpioid(1)}>

											<Text style={opioid == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
											<Text style={styles.titleInputDesc}>+1</Text>

										</TouchableOpacity>

										<TouchableOpacity
											style={opioid == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setOpioid(0)}>

											<Text style={opioid == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
											<Text style={styles.titleInputDesc}>+0</Text>

										</TouchableOpacity>
						              </View>
						            </View>
						            {/*end input contain*/}
					          	</View>
					         	 {/*end from contain*/}

	         		{/*This is result contain*/}
		          <View style={styles.resultContain}>
								<Text style={styles.unit}>Nguy cơ PONV trong 24 giờ</Text>
								<Text style={styles.result}>{risk}%</Text>
		           	<Text style={styles.unit}>Thang điểm Apfel: {point} điểm</Text>
		          </View>
		          {/*End result contain*/}

		         <View style={styles.formInfo}>
		         	<Text style={styles.titleInfo}>Lời khuyên</Text>
              		<Text style={styles.infoText}>Sử dụng dự phòng thuốc chống nôn cho những bệnh nhân có nguy cơ cao</Text>
            	</View>

            	<View style={styles.formInfo}>
            		<Text style={styles.titleInfo}>Đánh giá</Text>

            		<View style={styles.formInfo2col}>
	            		<View style={styles.infoCol1}>
		            		<Text style={styles.infoText}>Thang điểm Apfel</Text>
	            		</View>

	            		<View style={styles.infoCol2}>
	            			<Text style={styles.infoText}>Nguy cơ PONV</Text>
	            		</View>
	            	</View>

            		<View style={styles.formInfo2col}>
	            		<View style={styles.infoCol1}>
		            		<Text style={styles.infoText}>0</Text>
	            		</View>

	            		<View style={styles.infoCol2}>
	            			<Text style={styles.infoText}>10%</Text>
	            		</View>
	            	</View>

            		<View style={styles.formInfo2col}>
	            		<View style={styles.infoCol1}>
		            		<Text style={styles.infoText}>1</Text>
	            		</View>

	            		<View style={styles.infoCol2}>
	            			<Text style={styles.infoText}>21%</Text>
	            		</View>
	            	</View>

            		<View style={styles.formInfo2col}>
	            		<View style={styles.infoCol1}>
		            		<Text style={styles.infoText}>2</Text>
	            		</View>

	            		<View style={styles.infoCol2}>
	            			<Text style={styles.infoText}>39%</Text>
	            		</View>
	            	</View>

            		<View style={styles.formInfo2col}>
	            		<View style={styles.infoCol1}>
		            		<Text style={styles.infoText}>3</Text>
	            		</View>

	            		<View style={styles.infoCol2}>
	            			<Text style={styles.infoText}>61%</Text>
	            		</View>
	            	</View>

            		<View style={styles.formInfo2col}>
	            		<View style={styles.infoCol1}>
		            		<Text style={styles.infoText}>4</Text>
	            		</View>

	            		<View style={styles.infoCol2}>
	            			<Text style={styles.infoText}>79%</Text>
	            		</View>
	            	</View>

            	</View>

            	<View style={styles.formInfo}>
            		<Text style={styles.infoText}>Tác giả: Dr. Christian C. Apfel</Text>
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
