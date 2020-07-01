import React, {useState} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard} from 'react-native'

import AdMob from '../components/AdMob'

import {styles} from '../components/styles'
import {t} from '../locales/index'

export default function DifficultAirway(){

	const [thyromental, setThyromental] = useState(0)
	const [mount, setMount] = useState(0)
	const [mallampati, setMallampati] = useState(0)
	const [nick, setNick] = useState(0)
	const [prognath, setPrognath] = useState(0)
	const [weight, setWeight] = useState(0)
	const [history, setHistory] = useState(0)

	var point = thyromental + mount + mallampati + nick + prognath + weight + history
	var risk, rate

	if (point < 4) {
		risk = t('low')
		rate = ''
	}else {
		risk = t('high')
		rate = t('specificity')
	}

	return(
	<View>
	    <ScrollView>
	    <KeyboardAvoidingView style={styles.container}>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerTitle}>{t('difficult_airway_title')}</Text>
			        <Text style={styles.headerSubTitle}>{t('difficult_airway_desc')}</Text>
			        </View>
		        {/*End header*/}

						{/*This is form container*/}
						 <View style={styles.formContain}>
							 {/*This is input contain*/}
							 <View style={styles.inputContain}>
								 <View style={styles.titleInput}>
									 <Text style={styles.titleInputText}>{t('mount_open')}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
										 <TouchableOpacity
											 style= {mount == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setMount(0)}>
											 <Text style={mount == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'≥4 cm'}</Text>
											 <Text style={styles.titleInputDesc}>+0</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style={mount == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setMount(1)}>
											 <Text style={mount == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'<4 cm'}</Text>
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
		                <Text style={styles.titleInputText}>{t('thyromental')}</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
										<TouchableOpacity
											style= {thyromental == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setThyromental(0)}>
											<Text style={thyromental == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'>6.5 cm'}</Text>
											<Text style={styles.titleInputDesc}>0</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {thyromental == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setThyromental(1)}>
											<Text style={thyromental == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'6.0 - 6.5 cm'}</Text>
											<Text style={styles.titleInputDesc}>+1</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {thyromental == 2 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setThyromental(2)}>
											<Text style={thyromental == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'< 6.0 cm'}</Text>
											<Text style={styles.titleInputDesc}>+2</Text>
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
									 <Text style={styles.titleInputText}>{t('mallampati')}</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
									 <TouchableOpacity
										 style= {mallampati == 0 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setMallampati(0)}>
										 <Text style={mallampati == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>I</Text>
										 <Text style={styles.titleInputDesc}>0</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {thyromental == 1 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setThyromental(1)}>
										 <Text style={thyromental == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>II</Text>
										 <Text style={styles.titleInputDesc}>+1</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {thyromental == 2 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setThyromental(2)}>
										 <Text style={thyromental == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>III - IV</Text>
										 <Text style={styles.titleInputDesc}>+2</Text>
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
									 <Text style={styles.titleInputText}>{t('nick_movement')}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
										 <TouchableOpacity
											 style= {nick == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setNick(0)}>
											 <Text style={nick == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'>90°'}</Text>
											 <Text style={styles.titleInputDesc}>+0</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {nick == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setNick(1)}>
											 <Text style={nick == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'80-90°'}</Text>
											 <Text style={styles.titleInputDesc}>+1</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {nick == 2 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setNick(2)}>
											 <Text style={nick == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'<80°'}</Text>
											 <Text style={styles.titleInputDesc}>+2</Text>
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
									 <Text style={styles.titleInputText}>{t('ability_prognath')}</Text>
								 </View>

								 <View style={styles.buttonContainHorizontal}>
										 <TouchableOpacity
											 style= {prognath == 0 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setPrognath(0)}>
											 <Text style={prognath == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('yes')}</Text>
											 <Text style={styles.titleInputDesc}>+0</Text>
										 </TouchableOpacity>

										 <TouchableOpacity
											 style= {prognath == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											 onPress={() => setPrognath(1)}>
											 <Text style={prognath == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('no')}</Text>
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
									 <Text style={styles.titleInputText}>{t('weight')}</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
									 <TouchableOpacity
										 style= {weight == 0 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setWeight(0)}>
										 <Text style={weight == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'<90 Kg (198.4 lbs)'}</Text>
										 <Text style={styles.titleInputDesc}>+0</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {weight == 1 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setWeight(1)}>
										 <Text style={weight == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'90-110 kg (198.4-242.5 lbs)'}</Text>
										 <Text style={styles.titleInputDesc}>+1</Text>
									 </TouchableOpacity>

									 <TouchableOpacity
										 style= {weight == 2 ? styles.buttonSelect : styles.buttonNonSelect}
										 onPress={() => setWeight(2)}>
										 <Text style={weight == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>{'>110 kg (242.5 lbs)'}</Text>
										 <Text style={styles.titleInputDesc}>+2</Text>
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
									 <Text style={styles.titleInputText}>{t('history_difficult')}</Text>
								 </View>

								 <View style={styles.buttonContainVertical}>
					 <TouchableOpacity
						 style= {history == 0 ? styles.buttonSelect : styles.buttonNonSelect}
						 onPress={() => setHistory(0)}>

						 <Text style={history == 0? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('none')}</Text>
						 <Text style={styles.titleInputDesc}>+0</Text>

					 </TouchableOpacity>

					 <TouchableOpacity
						 style= {history == 1 ? styles.buttonSelect : styles.buttonNonSelect}
						 onPress={() => setHistory(1)}>

						 <Text style={history == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('questionable')}</Text>
						 <Text style={styles.titleInputDesc}>+1</Text>

					 </TouchableOpacity>

					 <TouchableOpacity
						 style= {history == 2 ? styles.buttonSelect : styles.buttonNonSelect}
						 onPress={() => setHistory(2)}>

						 <Text style={history == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('definite')}</Text>
						 <Text style={styles.titleInputDesc}>+2</Text>

					 </TouchableOpacity>

								 </View>
							 </View>
							 {/*end input contain*/}
						 </View>
						{/*end from contain*/}

	         	{/*This is result contain*/}
		          <View style={styles.resultContain}>
		              <View style={styles.resultTitle}>
		                <Text style={styles.resultTitleText}>EGRI: {point}</Text>
										<Text style={styles.resultTitleDesc}>{t('point')}</Text>
		           </View>

							 <Text style={styles.unit}>{t('risk_difficult')}</Text>
		           <Text style={styles.result}>{risk}</Text>
		           <Text style={styles.unit}>{rate}</Text>
		          </View>
		          {/*End result contain*/}


							<View style={styles.formInfo}>
								<Text style={styles.infoText}>{t('difficult_airway_advice')}</Text>
							</View>

            	<View style={styles.formInfo}>
            		<Text style={styles.infoText}>{t('creator')}: {'Dr. Abdel R. El-Ganzouri'}</Text>
							</View>

	      	</View>
	      </TouchableWithoutFeedback>
	    </KeyboardAvoidingView>

	    </ScrollView>

	</View>
	)
}
