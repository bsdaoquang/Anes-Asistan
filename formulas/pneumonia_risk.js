import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard
} from 'react-native'
import DropDownPicker  from 'react-native-dropdown-picker'
import AdMob from '../components/AdMob'

import {styles} from '../components/styles'
import {t} from '../locales/index'

export default function PostoperativePneumona(){

	DATA = [
		{label: t('anorectal'), value: -0.8470},
		{label: t('aortic'), value: 0.7178},
		{label: t('bariatric'), value: -0.6282},
		{label: t('brain'), value: 0.6841},
		{label: t('breast'), value: -2.3318},
		{label: t('cardiac'), value: 0.1382},
		{label: t('ent'), value: -0.3665},
		{label: t('foregut'), value: 1.0660},
		{label: t('gallbladder'), value: -0.3951},
		{label: t('hernia'),  value: 0},
		{label: t('intestinal'),  value: 0.6169},
		{label: t('neck'), value: -0.0872},
		{label: t('gynecologic'), value: -0.4101},
		{label: t('orthopedic'), value: -0.5415},
		{label: t('abdomen'), value: 0.4021},
		{label: t('peripheral'), value: -0.4519},
		{label: t('skin'), value: -0.5075},
		{label: t('spine'), value: -0.5672},
		{label: t('non-esophageal'), value: 0.8901},
		{label: t('vein'), value: -1.4760},
		{label: t('urology'), value: 0.1076}						 
	]

	const [functionStatus, setFunctionStatus] = useState(0)
	const [copd, setCopd] = useState(0)
	const [mallampati, setMallampati] = useState(0)
	const [asaClass, setAsaClass] = useState(-3.0225)
	const [sepsis, setSepsis] = useState(-0.7641)
	const [smoking, setSmoking] = useState(-0.4306)
	const [procedure, setProcedure] = useState(0)
	const [age, setAge] = useState(age)

	var risk = 0
	var i

	if (age != null) {
		var e = Math.E
		var x = -2.8977 +((age*0.0144) + (copd + mallampati + asaClass + sepsis + smoking + procedure))
		risk = (((Math.pow(e,x))/(1 + (Math.pow(e, x))))*100).toFixed(1)
	}

	return(
	<View>
	    <ScrollView>
	    <KeyboardAvoidingView style={styles.container}>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerTitle}>{t('pneumonia_risk_title')}</Text>
			        <Text style={styles.headerSubTitle}>{t('pneumonia_risk_desc')}</Text>
			        </View>
		        {/*End header*/}

						{/*This is form container*/}
	          <View style={styles.formContain}>
	            {/*This is input contain*/}
	            <View style={styles.inputContain}>
	              <View style={styles.titleInput}>
	                <Text style={styles.titleInputText}>{t('age')}</Text>
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
	                <Text style={styles.unitTitle}>{t('years')}</Text>
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
									 <Text style={styles.titleInputDesc}>{t('COPD_desc')}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
										 <TouchableOpacity
											 style= {copd == -0.4553 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setCopd(-0.4553)}>
											 <Text style={copd == -0.4553? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('no')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style={copd == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setCopd(0)}>
											 <Text style={copd == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('yes')}</Text>
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
		                <Text style={styles.titleInputText}>{t('function_status')}</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
										<TouchableOpacity
											style= {functionStatus == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0)}>
											<Text style={functionStatus == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('independent')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 0.7653 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0.7653)}>
											<Text style={functionStatus == 0.7653? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('partially_dependent')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {functionStatus == 0.9400 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setFunctionStatus(0.9400)}>
											<Text style={functionStatus == 0.9400? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('totally_dependent')}</Text>
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
											 style= {asaClass == -3.0225 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-3.0225)}>
											 <Text style={asaClass == -3.0225? styles.buttonTextSelect : styles.buttonTextNonSelect}>1. {t('asa1')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -1.6057 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-1.6057)}>
											 <Text style={asaClass == -1.6057? styles.buttonTextSelect : styles.buttonTextNonSelect}>2. {t('asa2')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == -0.4915 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(-0.4915)}>
											 <Text style={asaClass == -0.4915? styles.buttonTextSelect : styles.buttonTextNonSelect}>3. {t('asa3')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {asaClass == 0.0123 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setAsaClass(0.0123)}>
											 <Text style={asaClass == 0.0123? styles.buttonTextSelect : styles.buttonTextNonSelect}>4. {t('asa4')}</Text>
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
											 style= {sepsis == -0.7641 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(-0.7641)}>
											 <Text style={sepsis == -0.7641? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('none')}</Text>
										 </TouchableOpacity>
										 <TouchableOpacity
											 style= {sepsis == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0)}>
											 <Text style={sepsis == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('preoperative_systemic')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == -0.0842 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(-0.0842)}>
											 <Text style={sepsis == -0.0842? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('preoprative_sepsis')}</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {sepsis == 0.1048 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setSepsis(0.1048)}>
											 <Text style={sepsis == 0.1048? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('preoprative_septic_shock')}</Text>
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
									 <Text style={styles.titleInputText}>{t('smoking_year')}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
									 <TouchableOpacity
										 style= {smoking == -0.4306 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setSmoking(-0.4306)}>
										 <Text style={smoking == -0.4306? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('no')}</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {smoking == 0 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setSmoking(0)}>
										 <Text style={smoking == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('yes')}</Text>
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
								placeholder="Select procedure"
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
		                <Text style={styles.resultTitleText}>{t('pneumonia_risk')}</Text>
						<Text style={styles.resultTitleDesc}></Text>
		           </View>

		           	<Text style={styles.result}>{risk} %</Text>
		         </View>

		           	: null

		           }

					<View style={styles.formInfo}>
			            <Text style={styles.titleInfo}>{t('formula')}</Text>
			            <Text style={styles.infoText}>{t('formula_postopreative_desc_1')}</Text>
		            	<Text style={styles.infoText}>{t('formula_postopreative_desc_2')}</Text>
		          </View>

		         <View style={styles.formInfo}>
		         	<Text style={styles.titleInfo}>{t('age')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>0.0144 x {t('years')}</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>COPD</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('no')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.4553</Text>
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
					        <Text style={styles.infoText}>0.7653</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('totally_dependent')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.9400</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>{t('asa_class')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa1')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-3.0225</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa2')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-1.6057</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa3')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.4915</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('asa4')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.0123</Text>
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
					        <Text style={styles.infoText}>-0.7641</Text>
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
					        <Text style={styles.infoText}>-0.0842</Text>
				         </View>
				    </View>
				    <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('preoprative_septic_shock')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>0.1048</Text>
				         </View>
				    </View>

				    <Text style={styles.titleInfo}>{t('smoking_year')}</Text>
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('no')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.4306</Text>
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
			        <View style={styles.formInfo2col}>
				         <View style={styles.infoCol1}>
					        <Text style={styles.infoText}>{t('anorectal')}</Text>
				         </View>
				         <View style={styles.infoCol2}>
					        <Text style={styles.infoText}>-0.8470</Text>
				         </View>
				    </View>
				    
				 </View>

            	<View style={styles.formInfo}>
            		<Text style={styles.infoText}>{t('creator')}: {'Dr.Himani Gupta & Dr.Prateek K.Gupta'}</Text>
				</View>


	      	</View>
	      </TouchableWithoutFeedback>
	    </KeyboardAvoidingView>

	    </ScrollView>

	</View>
	)
}
