import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, FlatList,
	YellowBox, RefreshControl
} from 'react-native'
import DropDownPicker  from 'react-native-dropdown-picker'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'
import {t} from '../locales/index'

console.disableYellowBox = true

export default function RespiratoryRisk(){

	DATA = [
		{label: t('anorectal'), value: -1.3530},
		{label: t('aortic'), value: 1.0781},
		{label: t('bariatric'), value: -1.0112},
		{label: t('brain'), value: 0.7336},
		{label: t('breast'), value: -2.6462},
		{label: t('cardiac'), value: 0.2744},
		{label: t('ent'), value: 0.1060},
		{label: t('foregut'), value: 0.9694},
		{label: t('gallbladder'), value: -0.5668},
		{label: t('hernia'),  value: 0},
		{label: t('intestinal'),  value: 0.5737},
		{label: t('neck'), value: -0.5271},
		{label: t('gynecologic'), value: -1.2431},
		{label: t('orthopedic'), value: -0.8577},
		{label: t('abdomen'), value: 0.2416},
		{label: t('peripheral'), value: -0.2389},
		{label: t('skin'), value: -0.3206},
		{label: t('spine'), value: -0.5220},
		{label: t('non-esophageal'), value: 0.6715},
		{label: t('vein'), value: -2.0080},
		{label: t('urology'), value: 0.3093}
	]

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
	      <Text style={styles.titleInputText}>{t({label})}</Text>
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
	<View>
	    <ScrollView
				RefreshControl ={
					<RefreshControl refreshing={refreshing} onRefresh = {onRefresh} />
				}
			>
	    <KeyboardAvoidingView style={styles.container}>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerTitle}>{t('prespiratory_risk')}</Text>
			        <Text style={styles.headerSubTitle}>{t('prespiratory_risk_desc')}</Text>
			        </View>
		        {/*End header*/}

							{/*This is form container*/}
	          	<View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>{t('function_status')}</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
										<TouchableOpacity
											style= {functionStatus == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0)}>
											<Text style={functionStatus == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('independent')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 0.7678 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0.7678)}>
											<Text style={functionStatus == 0.7678? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('partially_dependent')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 1.4046 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(1.4046)}>
											<Text style={functionStatus == 1.4046? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('totally_dependent')}</Text>
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
									 <Text style={styles.titleInputText}>{t('asa_class')}</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
										 <TouchableOpacity
											 style= {asaClass == -3.5265 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-3.5265)}>
											 <Text style={asaClass == -3.5265? styles.buttonTextSelect : styles.buttonTextNonSelect}>1. {t('asa1')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -2.0008 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-2.0008)}>
											 <Text style={asaClass == -2.0008? styles.buttonTextSelect : styles.buttonTextNonSelect}>2. {t('asa2')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -0.6201 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-0.6201)}>
											 <Text style={asaClass == -0.6201? styles.buttonTextSelect : styles.buttonTextNonSelect}>3. {t('asa3')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0.2441 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0.2441)}>
											 <Text style={asaClass == 0.2441? styles.buttonTextSelect : styles.buttonTextNonSelect}>4. {t('asa4')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0)}>
											 <Text style={asaClass == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>5. {t('asa5')}</Text>
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
									 <Text style={styles.titleInputText}>{t('sepsis')}</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
										 <TouchableOpacity
											 style= {sepsis == -0.7840 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(-0.7840)}>
											 <Text style={sepsis == -0.7840? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('none')}</Text>
										 </TouchableOpacity>
										 <TouchableOpacity
											 style= {sepsis == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0)}>
											 <Text style={sepsis == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('preoperative_systemic')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == 0.2752 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0.2752)}>
											 <Text style={sepsis == 0.2752? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('preoprative_sepsis')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == 0.9035 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0.9035)}>
											 <Text style={sepsis == 0.9035? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('preoprative_septic_shock')}</Text>
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
									 <Text style={styles.titleInputText}>{t('emergency_case')}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
									 <TouchableOpacity
										 style= {emergenry == -0.5739 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setEmergency(-0.5739)}>
										 <Text style={emergenry == -0.5739? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('no')}</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {emergenry == 0 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setEmergency(0)}>
										 <Text style={emergenry == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('yes')}</Text>
									 </TouchableOpacity>
								 </View>
							 </View>
							 {/*end input contain*/}
						 </View>
						{/*end from contain*/}

						{/*This is input contain*/}
						<View style={styles.inputContain}>
							<View style={styles.titleInput}>
								<Text style={styles.titleInputText}>{t('type_of_procedure')}</Text>
							</View>

							<View style={styles.buttonContainVertical}>
							<DropDownPicker
								items={DATA}
								placeholder={t('select_procedure')}
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
		                <Text style={styles.resultTitleText}>{t('prespiratory_failure_risk')}</Text>
						<Text style={styles.resultTitleDesc}></Text>
		           </View>

		           	<Text style={styles.result}>{risk} %</Text>
								<Text style={styles.unit}>{t('rate_prespiratory')}</Text>
		         </View>

		           	: null

		           }

					<View style={styles.formInfo}>
			            <Text style={styles.titleInfo}>{t('formula')}</Text>
			            <Text style={styles.infoText}>{t('formula_prespiratory_desc_1')}</Text>
		            	<Text style={styles.infoText}>{t('formula_prespiratory_desc_2')}</Text>
		      </View>

		     <View style={styles.formInfo}>
				    <Text style={styles.titleInfo}>{t('function_status')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('independent')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('partially_dependent')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.7678</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('totally_dependent')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>1.4046</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>{t('asa_class')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa1')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-3.5265</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa2')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-2.0008</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa3')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.6201</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa4')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.2441</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa5')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>

			    	<Text style={styles.titleInfo}>{t('sepsis')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('none')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.7840</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('preoperative_systemic')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('preoprative_sepsis')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.2752</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('preoprative_septic_shock')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.9035</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>{t('emergency_case')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('no')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.5739</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('yes')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>{t('type_of_procedure')}</Text>
						<Procedures />
						 </View>
			        <View style={styles.formInfo}>
			            <Text style={styles.infoText}>{t('creator')}: {'Dr.Himani Gupta & Dr.Prateek K.Gupta'}</Text>
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
