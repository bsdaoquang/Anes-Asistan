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

export default function ItraoperativeFluidAdults(){
	const [weight, setWeight] = useState(weight)
	const [timeNPO, setTimeNPO] = useState(timeNPO)
	const [traumaTissue, setTraumaTissue] = useState(0)

	var mainFluid, npoFluid, fluid1st, fluid2nd, fluid4th, fluidLoss

	if (weight != null && timeNPO != null) {
		fluidLoss = weight * traumaTissue

		mainFluid = parseInt(weight) + 40
		npoFluid = mainFluid * parseInt(timeNPO)
		fluid1st = ((0.5*npoFluid) + mainFluid).toFixed(0)
		fluid2nd = ((0.25*npoFluid) + mainFluid + fluidLoss).toFixed(0)
		fluid4th = mainFluid + fluidLoss
	}

	return(
		<View>
			<ScrollView>
				<KeyboardAvoidingView style={styles.container}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							{/*This is header*/}
							<View style={styles.headerContain}>
								<Text style={styles.headerTitle}>{t('intraoperative_fluid_dosing')}</Text>
								<Text style={styles.headerSubTitle}>{t('dose_iv_fluids_intraoperative')}</Text>
							</View>
							{/*End header*/}

							<View style={styles.formImportant}>
								<Text style={styles.titleInfo, {color: '#fafafa', fontSize: 18}}>{t('important')}</Text>
								<Text style={styles.importantText}>{t('intraoperative_fluid_important')}</Text>
							</View>

							<View style={styles.formIntructions}>
							<Text style={styles.titleInfo, {color: '#fafafa', fontSize: 18}}>{t('intructions')}</Text>
								<Text style={styles.importantText}>{t('intraoperative_fluid_instructions')}</Text>
							</View>

							{/*This is form container*/}
		          <View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>{t('weight')}</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {weight => setWeight(weight)}
		                  clearTextOnFocus
		                />
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
		                <Text style={styles.titleInputText}>{t('time_npo')}</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {timeNPO => setTimeNPO(timeNPO)}
		                  clearTextOnFocus
		                />
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>{t('hours')}</Text>
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
										 <Text style={styles.titleInputText}>{t('trauma_tissue')}</Text>
										 <Text style={styles.titleInputDesc}>{t('trauma_tissue_desc')}</Text>
									 </View>

									 <View style={styles.buttonContainVertical}>
											 <TouchableOpacity
												 style= {traumaTissue == 3 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setTraumaTissue(3)}>
												 <Text style={traumaTissue == 3? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('minimal')}</Text>
											 </TouchableOpacity>

											 <TouchableOpacity
												 style={traumaTissue == 5 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setTraumaTissue(5)}>
												 <Text style={traumaTissue == 5? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('moderate')}</Text>
											 </TouchableOpacity>

											 <TouchableOpacity
												 style={traumaTissue == 7 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setTraumaTissue(7)}>
												 <Text style={traumaTissue == 7? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('severe')}</Text>
											 </TouchableOpacity>
									 </View>
								 </View>
								 {/*end input contain*/}
							 </View>
							{/*end from contain*/}

							{/*this is result, show in result != 0*/}
							<View style={styles.resultContain}>
								<View style={styles.resultTitle}>
									{
										mainFluid != '' ?
											<Text style={styles.resultTitleText}>{t('hourly_main')}</Text>
										: <Text style={styles.unit}>{t('please_fill')}</Text>
									}
								</View>
								{
									mainFluid != '' ?
									<View style={styles.resultContent}>
										<Text style={styles.result}>{mainFluid}</Text>
										<Text style={styles.unit}>{t('mL/hr')}</Text>
									</View>
									: null
								}
							</View>
							{/*end result*/}

							{/*this is result, show in result != 0*/}
							{
								mainFluid != '' ?
							<View style={styles.resultContain}>
								<View style={styles.resultTitle}>
									<Text style={styles.resultTitleText}>{t('npo_fluid_deficit')}</Text>
								</View>
								<View style={styles.resultContent}>
									<Text style={styles.result}>{npoFluid}</Text>
									<Text style={styles.unit}>mL</Text>
								</View>
							</View>
							: null
						}
						{/*end result*/}

						{/*this is result, show in result != 0*/}
						{
							mainFluid != '' ?
						<View style={styles.resultContain}>
							<View style={styles.resultTitle}>
								<Text style={styles.resultTitleText}>{t('1st_hour_fluids')}</Text>
							</View>
							<View style={styles.resultContent}>
								<Text style={styles.result}>{fluid1st}</Text>
								<Text style={styles.unit}>{t('mL/hr')}</Text>
							</View>
							<Text style={styles.rateContent}>{t('2nd_hour')}: {fluid2nd} {t('mL/hr')}</Text>
							<Text style={styles.rateContent}>{t('3rd_hour')}: {fluid2nd} {t('mL/hr')}</Text>
							<Text style={styles.rateContent}>{t('4th_hour_and')}: {fluid4th} {t('mL/hr')}</Text>
						</View>
						: null
					}
					{/*end result*/}
						<View style={styles.formInfo}>
								<Text style={styles.titleInfo}>{t('formula')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_1')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_2')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_3')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_4')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_5')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_6')}</Text>
								<Text style={styles.infoText}>{t('intraoperative_formula_7')}</Text>

								<View style={styles.formInfo2col}>
					        <View style={styles.infoCol2}>
						        <Text style={styles.infoText}>{t('minimal')}</Text>
					         </View>
					         <View style={styles.infoCol1}>
						        <Text style={styles.infoText}>{t('minimalEg')}</Text>
					      	</View>
									<View style={styles.infoCol1}>
									 <Text style={styles.infoText}>2-4mL/kg/hr ({t('uses')} 3mL/kg/hr)</Text>
								 	</View>
								</View>

								<View style={styles.formInfo2col}>
					        <View style={styles.infoCol2}>
						        <Text style={styles.infoText}>{t('moderate')}</Text>
					         </View>
					         <View style={styles.infoCol1}>
						        <Text style={styles.infoText}>{t('moderateEg')}</Text>
					      	</View>
									<View style={styles.infoCol1}>
									 <Text style={styles.infoText}>4-6mL/kg/hr ({t('uses')} 5mL/kg/hr)</Text>
								 	</View>
								</View>

								<View style={styles.formInfo2col}>
					        <View style={styles.infoCol2}>
						        <Text style={styles.infoText}>{t('severe')}</Text>
					         </View>
					         <View style={styles.infoCol1}>
						        <Text style={styles.infoText}>{t('severeEg')}</Text>
					      	</View>
									<View style={styles.infoCol1}>
									 <Text style={styles.infoText}>4-6mL/kg/hr ({t('uses')} 5mL/kg/hr)</Text>
								 	</View>
								</View>
						</View>

							<View style={styles.formInfo}>
								<Text style={styles.infoText}>{t('creator')}: {'Dr. Tomas Corcoran'}</Text>
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
