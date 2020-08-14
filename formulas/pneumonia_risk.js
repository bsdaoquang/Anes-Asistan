import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, FlatList, RefreshControl} from 'react-native'
import DropDownPicker  from 'react-native-dropdown-picker'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'


	const DATA = [
		{label: 'Hậu môn trực tràng', value: -0.8470},
		{label: 'Động mạch chủ', value: 0.7178},
		{label: 'Nhi khoa', value: -0.6282},
		{label: 'Sọ não', value: 0.6841},
		{label: 'Lồng ngực', value: -2.3318},
		{label: 'Tim mạch', value: 0.1382},
		{label: 'ENT (trừ tuyến giáp, cận giáp)', value: -0.3665},
		{label: 'Gan mật', value: 1.0660},
		{label: 'Túi mật, ruột thừa, tuyến thượng thận, hoặc lách', value: -0.3951},
		{label: 'Thoát vị (bẹn, bụng, ống đùi)',  value: 0},
		{label: 'Ống tiêu hóa',  value: 0.6169},
		{label: 'Cổ', value: -0.0872},
		{label: 'Sản phụ khoa', value: -0.4101},
		{label: 'Chỉnh hình', value: -0.5415},
		{label: 'Phẫu thuật bụng khác', value: 0.4021},
		{label: 'Mạch máu ngoại biên', value: -0.4519},
		{label: 'Da', value: -0.5075},
		{label: 'Cột sống', value: -0.5672},
		{label: 'Lồng ngực (không bao gồm thực quản)', value: 0.8901},
		{label: 'Mạch máu', value: -1.4760},
		{label: 'Tiết niệu', value: 0.1076}
	]

export default function PostoperativePneumona(){

	const [functionStatus, setFunctionStatus] = useState(0)
	const [copd, setCopd] = useState(0)
	const [mallampati, setMallampati] = useState(0)
	const [asaClass, setAsaClass] = useState(-3.0225)
	const [sepsis, setSepsis] = useState(-0.7641)
	const [smoking, setSmoking] = useState(-0.4306)
	const [procedure, setProcedure] = useState(0)
	const [age, setAge] = useState(age)

	const [refreshing, setRefreshing] = useState(false)

	var risk = 0

	if (age != null) {
		var e = Math.E
		var x = -2.8977 +((age*0.0144) + (copd + mallampati + asaClass + sepsis + smoking + procedure))
		risk = (((Math.pow(e,x))/(1 + (Math.pow(e, x))))*100).toFixed(2)
	}

	function Item({ label }) {
	  return (
	    <View style={styles.buttonDesc}>
	      <Text style={styles.titleInputText}>{label}</Text>
	    </View>
	  );
	}

	function wait(timeout) {
		return new Promise(resolve => {
			setTimeout(resolve, timeout);
		})
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		wait(2000).then(() => setRefreshing(false))
	}, [refreshing])

	return(
	<View style={styles.container}>
	    <ScrollView>
	    <KeyboardAvoidingView>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerSubTitle}>Dự đoán nguy cơ viêm phổi sau phẫu thuật (thang điểm Gupta)</Text>
			        </View>
		        {/*End header*/}

						{/*This is form container*/}
	          <View style={styles.formContain}>
	            {/*This is input contain*/}
	            <View style={styles.inputContain}>
	              <View style={styles.titleInput}>
	                <Text style={styles.titleInputText}>Tuổi</Text>
	              </View>

	              <View style={styles.inputContent}>
	                <TextInput
	                  style={styles.input}
	                  placeholder = '0'
	                  keyboardType = 'number-pad'
	                  onChangeText = {age => setAge(age)}
	                  clearTextOnFocus
	                />
	              </View>

	              <View style={styles.unitContainInput}>
	                <Text style={styles.unitTitle}>tuổi</Text>
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
									 <Text style={styles.titleInputText}>COPD</Text>
									 <Text style={styles.titleInputDesc}>COPD có suy giảm chức năng, hoặc đang nhập viện điều trị, hoặc EFV1 {'< 75%'}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
										 <TouchableOpacity
											 style= {copd == -0.4553 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setCopd(-0.4553)}>
											 <Text style={copd == -0.4553? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style={copd == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setCopd(0)}>
											 <Text style={copd == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
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
		                <Text style={styles.titleInputText}>Thực hiện chức năng</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
										<TouchableOpacity
											style= {functionStatus == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0)}>
											<Text style={functionStatus == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Tự thực hiện</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 0.7653 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0.7653)}>
											<Text style={functionStatus == 0.7653? styles.buttonTextSelect : styles.buttonTextNonSelect}>Phụ thuộc 1 phần</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 0.9400 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0.9400)}>
											<Text style={functionStatus == 0.9400? styles.buttonTextSelect : styles.buttonTextNonSelect}>Phụ thuộc hoàn toàn</Text>
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
									 <Text style={styles.titleInputText}>Phân loại ASA</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
										 <TouchableOpacity
											 style= {asaClass == -3.0225 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-3.0225)}>
											 <Text style={asaClass == -3.0225? styles.buttonTextSelect : styles.buttonTextNonSelect}>1. Sức khỏe bình thường</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -1.6057 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-1.6057)}>
											 <Text style={asaClass == -1.6057? styles.buttonTextSelect : styles.buttonTextNonSelect}>2. Có kèm theo bệnh của một cơ quan ở mức độ trung bình.</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -0.4915 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-0.4915)}>
											 <Text style={asaClass == -0.4915? styles.buttonTextSelect : styles.buttonTextNonSelect}>3. Bị tổn thương trầm trọng một cơ quan quan trọng, nhưng chưa làm mất chức năng của cơ quan đó.</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0.0123 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0.0123)}>
											 <Text style={asaClass == 0.0123? styles.buttonTextSelect : styles.buttonTextNonSelect}>4. Tổn thương trầm trọng một cơ quan quan trọng làm mất chức năng, ảnh hưởng đến tiên lượng sống của bệnh nhân.</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0)}>
											 <Text style={asaClass == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>5. Có thể chết trên bàn mổ, tử vong trong 24 giờ nếu không can thiệp phẫu thuật.</Text>
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
									 <Text style={styles.titleInputText}>Nhiễm trùng</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
										 <TouchableOpacity
											 style= {sepsis == -0.7641 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(-0.7641)}>
											 <Text style={sepsis == -0.7641? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
										 </TouchableOpacity>
										 <TouchableOpacity
											 style= {sepsis == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0)}>
											 <Text style={sepsis == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Hội chứng đáp ứng viêm trước phẫu thuật</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == -0.0842 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(-0.0842)}>
											 <Text style={sepsis == -0.0842? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nhiễm trùng huyết trước phẫu thuật</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == 0.1048 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0.1048)}>
											 <Text style={sepsis == 0.1048? styles.buttonTextSelect : styles.buttonTextNonSelect}>Sốc nhiễm trùng trước phẫu thuật</Text>
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
									 <Text style={styles.titleInputText}>Có hút thuốc trong vòng 1 năm</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
									 <TouchableOpacity
										 style= {smoking == -0.4306 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setSmoking(-0.4306)}>
										 <Text style={smoking == -0.4306? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {smoking == 0 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setSmoking(0)}>
										 <Text style={smoking == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
									 </TouchableOpacity>
								 </View>
							 </View>
							 {/*end input contain*/}
						 </View>
						{/*end from contain*/}

						{/*This is input contain*/}
						<View style={styles.inputContain}>
							<View style={styles.titleInput}>
								<Text style={styles.titleInputText}>Loại phẫu thuật</Text>
							</View>

							<View style={styles.buttonContainVertical}>
							<DropDownPicker
								items={DATA}
								placeholder='Loại phẫu thuật...'
								containerStyle={{height: 40, marginBottom: 150}}
								dropDownStyle={{height: 150}}
								labelStyle={styles.titleInputText}
								onChangeItem={item => setProcedure(item.value)}
							/>
						</View>
						{/*end input contain*/}
					</View>
				 {/*end from contain*/}

				 { risk != 0 ?

		          <View style={styles.resultContain}>
		              <View style={styles.resultTitle}>
		                <Text style={styles.resultTitleText}>Nguy cơ: </Text>
										<Text style={styles.result}>{risk} %</Text>
		           </View>
		         </View>
		           	: null
		           }

					<View style={styles.formInfo}>
			            <Text style={styles.titleInfo}>Công thức</Text>
			            <Text style={styles.infoText}>Nguy cơ suy hô hấp sau phẫu thuật, % = e^x / (1 + e^x)</Text>
		            	<Text style={styles.infoText}>Với x = −1.7397 + Tổng các giá trị của những lựa chọn trên</Text>
		          </View>

		         <View style={styles.formInfo}>
		         	<Text style={styles.titleInfo}>Tuổi</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>0.0144 x số tuổi</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>COPD</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Không</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.4553</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Có</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>Thực hiện chức năng</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Tự thực hiện</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Phụ thuộc một phần</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.7653</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Phụ thuộc hoàn toàn</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.9400</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>Phân loại ASA</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 1</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-3.0225</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 2</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-1.6057</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 3</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.4915</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 4</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.0123</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 5</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>

			    	<Text style={styles.titleInfo}>Yếu tố nhiễm trùng</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Không</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.7641</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Hội chứng đáp ứng viêm trước phẫu thuật</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Nhiễm trùng trước phẫu thuật</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.0842</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Sốc nhiễm trùng trước phẫu thuật</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.1048</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>Có hút thuốc trong vòng 1 năm</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Không</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.4306</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Có</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>Loại phẫu thuật thực hiện</Text>
						<Procedures />
						 </View>
			        <View style={styles.formInfo}>
			            <Text style={styles.infoText}>Tác giả: Dr.Himani Gupta & Dr.Prateek K.Gupta</Text>
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

function Procedures (){
	return(
		<FlatList
			data={DATA}
			renderItem={({ item }) => (
				<View style={styles.formInfo2col}>
					<View style={styles.infoCol1}>
						<Text style={styles.infoText}>{item.label}</Text>
					</View>
					<View style={styles.infoCol2}>
						<Text style={styles.infoText}>{item.value}</Text>
					</View>
				</View>
			)}
			keyExtractor={item => item.label}
		/>
	)
}
