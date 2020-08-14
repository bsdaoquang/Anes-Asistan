import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, FlatList, RefreshControl
} from 'react-native'
import DropDownPicker  from 'react-native-dropdown-picker'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

const	DATA = [
		{label: 'Hậu môn trực tràng', value: -1.3530},
		{label: 'Động mạch chủ', value: 1.0781},
		{label: 'Nhi khoa', value: -1.0112},
		{label: 'Sọ não', value: 0.7336},
		{label: 'Lồng ngực', value: -2.6462},
		{label: 'Tim', value: 0.2744},
		{label: 'ENT (Trừ tuyến giáp, cận giáp)', value: 0.1060},
		{label: 'Gan mật', value: 0.9694},
		{label: 'Túi mật, ruột thừa, tuyến thượng thận hoặc lách', value: -0.5668},
		{label: 'Thoát vị (bẹn, bụng, ống đùi)',  value: 0},
		{label: 'Ống tiêu hóa',  value: 0.5737},
		{label: 'Cổ', value: -0.5271},
		{label: 'Sản phụ khoa', value: -1.2431},
		{label: 'Chỉnh hình', value: -0.8577},
		{label: 'Bụng khác', value: 0.2416},
		{label: 'Mạch máu ngoại biên', value: -0.2389},
		{label: 'Da', value: -0.3206},
		{label: 'Cột sống', value: -0.5220},
		{label: 'Lồng ngực (không bao gồm thực quản)', value: 0.6715},
		{label: 'Mạch máu', value: -2.0080},
		{label: 'Tiết niệu', value: 0.3093}
	]


export default function RespiratoryRisk(){

	const [functionStatus, setFunctionStatus] = useState(0)
	const [asaClass, setAsaClass] = useState(-3.5265)
	const [sepsis, setSepsis] = useState(-0.7840)
	const [emergenry, setEmergency] = useState(-0.5739)
	const [procedure, setProcedure] = useState(0)

	const [refreshing, setRefreshing] = useState(false)

	var risk = 0
		var e = Math.E
		var x = -1.7397 +((asaClass + sepsis + emergenry + procedure + functionStatus))
		risk = (((Math.pow(e,x))/(1 + (Math.pow(e, x))))*100).toFixed(2)

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
	      <TouchableWithoutFeedback>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerSubTitle}>Dự đoán nguy cơ suy hô hấp sau phẫu thuật</Text>
			        </View>
		        {/*End header*/}

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
											style= {functionStatus == 0.7678 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0.7678)}>
											<Text style={functionStatus == 0.7678? styles.buttonTextSelect : styles.buttonTextNonSelect}>Phụ thuộc một phần</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 1.4046 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(1.4046)}>
											<Text style={functionStatus == 1.4046? styles.buttonTextSelect : styles.buttonTextNonSelect}>Phụ thuộc hoàn toàn</Text>
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
											 style= {asaClass == -3.5265 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-3.5265)}>
											 <Text style={asaClass == -3.5265? styles.buttonTextSelect : styles.buttonTextNonSelect}>1. ASA 1</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -2.0008 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-2.0008)}>
											 <Text style={asaClass == -2.0008? styles.buttonTextSelect : styles.buttonTextNonSelect}>2. ASA 2</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -0.6201 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-0.6201)}>
											 <Text style={asaClass == -0.6201? styles.buttonTextSelect : styles.buttonTextNonSelect}>3. ASA 3</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0.2441 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0.2441)}>
											 <Text style={asaClass == 0.2441? styles.buttonTextSelect : styles.buttonTextNonSelect}>4. ASA 4</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0)}>
											 <Text style={asaClass == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>5. ASA 5</Text>
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
									 <Text style={styles.titleInputText}>Yếu tố nhiễm trùng</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
										 <TouchableOpacity
											 style= {sepsis == -0.7840 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(-0.7840)}>
											 <Text style={sepsis == -0.7840? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
										 </TouchableOpacity>
										 <TouchableOpacity
											 style= {sepsis == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0)}>
											 <Text style={sepsis == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Hội chứng đáp ứng viêm trước phẫu thuật</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == 0.2752 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0.2752)}>
											 <Text style={sepsis == 0.2752? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nhiễm trùng trước phẫu thuật</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == 0.9035 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0.9035)}>
											 <Text style={sepsis == 0.9035? styles.buttonTextSelect : styles.buttonTextNonSelect}>Sốc nhiễm trùng trước phẫu thuật</Text>
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
									 <Text style={styles.titleInputText}>Cấp cứu</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
									 <TouchableOpacity
										 style= {emergenry == -0.5739 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setEmergency(-0.5739)}>
										 <Text style={emergenry == -0.5739? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {emergenry == 0 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setEmergency(0)}>
										 <Text style={emergenry == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
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
								<Text style={styles.unit}>Thở máy lâu hơn 48 giờ sau phẫu thuật, hoặc đặt lại nội khí quản trong vòng 30 ngày</Text>
		         </View>

		           	: null

		           }

					<View style={styles.formInfo}>
			            <Text style={styles.titleInfo}>Công thức:</Text>
			            <Text style={styles.infoText}>Nguy cơ suy hô hấp sau phẫu thuật, % = e^x / (1 + e^x)</Text>
		            	<Text style={styles.infoText}>Với x = −1.7397 + Tổng các giá trị của những lựa chọn trên</Text>
		      </View>

		     <View style={styles.formInfo}>
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
					        <Text style={styles.infoText}>0.7678</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Phụ thuộc hoàn toàn</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>1.4046</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>Phân loại ASA</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 1</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-3.5265</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 2</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-2.0008</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 3</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.6201</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>ASA 4</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.2441</Text>
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
					        <Text style={styles.infoText}>-0.7840</Text>
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
					        <Text style={styles.infoText}>0.2752</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Sốc nhiễm trùng trước phẫu thuật</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.9035</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>Cấp cứu</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>Không</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.5739</Text>
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

				    <Text style={styles.titleInfo}>Loại phẫu thuật</Text>
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
