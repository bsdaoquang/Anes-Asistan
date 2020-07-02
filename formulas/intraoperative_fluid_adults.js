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
										<Text style={styles.resultTitleText}>Hourly maintenance Fluid</Text>
									: <Text style={styles.unit}>Please fill out require fields</Text>
								}
							</View>
							{
								mainFluid != '' ?
								<View style={styles.resultContent}>
									<Text style={styles.result}>{mainFluid}</Text>
									<Text style={styles.unit}>mL/hr</Text>
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
								<Text style={styles.resultTitleText}>NPO fluid deficit</Text>
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
							<Text style={styles.resultTitleText}>1st hour fluids</Text>
						</View>
						<View style={styles.resultContent}>
							<Text style={styles.result}>{fluid1st}</Text>
							<Text style={styles.unit}>mL/hr</Text>
						</View>
						<Text style={styles.rateContent}>2nd hour: {fluid2nd} mL/hr</Text>
						<Text style={styles.rateContent}>3rd hour: {fluid2nd} mL/hr</Text>
						<Text style={styles.rateContent}>4th hr and beyond: {fluid4th} mL/hr</Text>
					</View>
					: null
				}
				{/*end result*/}

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
