import React, {useState} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard} from 'react-native'

import AdMob from '../components/AdMob'

import {styles} from '../components/styles'
import {t} from '../locales/index'

export default function ASAPhysical(){

	const [description, setDescription] = useState(0)
	const [emergency, setEmergency] = useState('')

	var point = description + emergency

	return(
	<View>
	    <ScrollView>
	    <KeyboardAvoidingView style={styles.container}>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerTitle}>{t('asa_title')}</Text>
			        <Text style={styles.headerSubTitle}>{t('asa_title_desc')}</Text>
			        </View>
		        {/*End header*/}

				{/*This is form container*/}
	          	<View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>{t('description')}</Text>
		              </View>

		              <View style={styles.buttonContainVertical}>
										<TouchableOpacity
											style= {description == 1 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setDescription(1)}>
											<Text style={description == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('asa1')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {description == 2 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setDescription(2)}>
											<Text style={description == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('asa2')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {description == 3 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setDescription(3)}>
											<Text style={description == 3? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('asa3')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {description == 4 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setDescription(4)}>
											<Text style={description == 4? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('asa4')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {description == 5 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setDescription(5)}>
											<Text style={description == 5? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('asa5')}</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style= {description == 6 ? styles.buttonSelect : styles.buttonNonSelect}
											onPress={() => setDescription(6)}>
											<Text style={description == 6? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('asa6')}</Text>
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
		                <Text style={styles.titleInputText}>{t('emergency')}</Text>
		              </View>

		              <View style={styles.buttonContainHorizontal}>
											<TouchableOpacity
												style= {emergency == 'E' ? styles.buttonSelect : styles.buttonNonSelect}
												onPress={() => setEmergency('E')}>
												<Text style={emergency == 'E'? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('yes')}</Text>
											</TouchableOpacity>

											<TouchableOpacity
												style={emergency == '' ? styles.buttonSelect : styles.buttonNonSelect}
												onPress={() => setEmergency('')}>
												<Text style={emergency == ''? styles.buttonTextSelect : styles.buttonTextNonSelect}>{t('no')}</Text>
											</TouchableOpacity>
		              </View>
		            </View>
		            {/*end input contain*/}
								<View style={styles.formInfo}>
										 <Text style={styles.infoText}>{t('asa_advice')}</Text>
								 </View>
	          	</View>
	         	 {/*end from contain*/}

	         	{/*This is result contain*/}
		          <View style={styles.resultContain}>
		              <View style={styles.resultTitle}>
		                <Text style={styles.resultTitleText}>{t('asa_class')}</Text>
		           </View>

		           <Text style={styles.result}>{point}</Text>
		           <Text style={styles.unit}>{t('asa_physical')}</Text>
		          </View>
		          {/*End result contain*/}

            	<View style={styles.formInfo}>
            		<Text style={styles.infoText}>{t('creator')}: {'Dr. Meyer Saklad'}</Text>
				</View>

	      	</View>
	      </TouchableWithoutFeedback>
	    </KeyboardAvoidingView>

	    </ScrollView>

	</View>
	)
}
